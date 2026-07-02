import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const target = searchParams.get("url")?.trim()

  if (!target) {
    return NextResponse.json({ error: "Missing 'url' query parameter." }, { status: 400 })
  }

  let normalized = target
  if (!/^https?:\/\//i.test(normalized)) normalized = `https://${normalized}`

  let parsed: URL
  try {
    parsed = new URL(normalized)
  } catch {
    return NextResponse.json({ error: "That does not look like a valid URL." }, { status: 400 })
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return NextResponse.json({ error: "Only http and https URLs are supported." }, { status: 400 })
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10_000)
    const res = await fetch(parsed.toString(), {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "DevKit-HeaderViewer/1.0" },
    })
    clearTimeout(timeout)

    const headers: Record<string, string> = {}
    res.headers.forEach((value, key) => {
      headers[key] = value
    })

    return NextResponse.json({
      url: res.url,
      status: res.status,
      statusText: res.statusText,
      headers,
    })
  } catch (e) {
    const message = e instanceof Error && e.name === "AbortError" ? "Request timed out." : "Failed to reach that URL."
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
