"use client"

import type React from "react"
import { useState } from "react"
import { Globe, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyButton, ErrorNote, Field, TextInput, ToolHeader } from "./tool-ui"

type Result = {
  url: string
  status: number
  statusText: string
  headers: Record<string, string>
}

export function HeaderViewer() {
  const [url, setUrl] = useState("https://vercel.com")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState<Result | null>(null)

  async function fetchHeaders(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return
    setLoading(true)
    setError("")
    setResult(null)
    try {
      const res = await fetch(`/api/headers?url=${encodeURIComponent(url.trim())}`)
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "Request failed.")
      } else {
        setResult(data)
      }
    } catch {
      setError("Network error while fetching headers.")
    } finally {
      setLoading(false)
    }
  }

  const statusColor =
    result && result.status < 300
      ? "text-primary"
      : result && result.status < 400
        ? "text-chart-3"
        : "text-destructive"

  return (
    <div className="flex flex-col gap-6">
      <ToolHeader
        icon={Globe}
        title="HTTP Header Viewer"
        description="Inspect the HTTP response headers returned by any public URL."
      />
      <form onSubmit={fetchHeaders} className="flex flex-col gap-2 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Field label="URL">
            <TextInput value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" />
          </Field>
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : <Globe />}
          Fetch headers
        </Button>
      </form>

      <ErrorNote>{error}</ErrorNote>

      {result ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border border-border bg-card px-4 py-3 text-sm">
            <span className={`font-mono font-semibold ${statusColor}`}>
              {result.status} {result.statusText}
            </span>
            <span className="font-mono text-muted-foreground break-all">{result.url}</span>
          </div>
          <Field
            label={`Response headers (${Object.keys(result.headers).length})`}
            action={<CopyButton value={Object.entries(result.headers).map(([k, v]) => `${k}: ${v}`).join("\n")} />}
          >
            <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
              {Object.entries(result.headers).map(([key, value]) => (
                <div key={key} className="grid grid-cols-1 gap-1 px-4 py-2.5 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-4">
                  <span className="font-mono text-sm font-medium text-primary break-all">{key}</span>
                  <span className="font-mono text-sm text-foreground break-all">{value}</span>
                </div>
              ))}
            </div>
          </Field>
        </div>
      ) : null}
    </div>
  )
}
