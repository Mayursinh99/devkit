"use client"

import { useMemo, useState } from "react"
import { KeyRound } from "lucide-react"
import { CopyButton, ErrorNote, Field, OutputBox, TextArea, ToolHeader } from "./tool-ui"

function b64urlDecode(part: string) {
  let s = part.replace(/-/g, "+").replace(/_/g, "/")
  while (s.length % 4) s += "="
  const binary = atob(s)
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

const SAMPLE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

function formatClaims(payload: Record<string, unknown>) {
  const notes: string[] = []
  const now = Math.floor(Date.now() / 1000)
  const fmt = (n: unknown) => (typeof n === "number" ? new Date(n * 1000).toLocaleString() : "")
  if (typeof payload.exp === "number") {
    notes.push(`exp: ${fmt(payload.exp)} ${payload.exp < now ? "(EXPIRED)" : "(valid)"}`)
  }
  if (typeof payload.iat === "number") notes.push(`iat: ${fmt(payload.iat)}`)
  if (typeof payload.nbf === "number") notes.push(`nbf: ${fmt(payload.nbf)}`)
  return notes
}

export function JwtDecoder() {
  const [token, setToken] = useState("")

  const result = useMemo(() => {
    if (!token.trim()) return null
    const parts = token.trim().split(".")
    if (parts.length < 2) return { error: "A JWT must have at least header and payload segments." }
    try {
      const header = JSON.parse(b64urlDecode(parts[0]))
      const payload = JSON.parse(b64urlDecode(parts[1]))
      return {
        header: JSON.stringify(header, null, 2),
        payload: JSON.stringify(payload, null, 2),
        signature: parts[2] ?? "",
        notes: formatClaims(payload),
        error: "",
      }
    } catch {
      return { error: "Failed to decode — this does not look like a valid JWT." }
    }
  }, [token])

  return (
    <div className="flex flex-col gap-6">
      <ToolHeader
        icon={KeyRound}
        title="JWT Decoder"
        description="Inspect the header, payload, and claims of a JSON Web Token. Decoding happens entirely in your browser."
      />
      <Field
        label="Encoded token"
        action={
          <button
            className="text-xs font-medium text-primary hover:underline"
            onClick={() => setToken(SAMPLE)}
            type="button"
          >
            Load sample
          </button>
        }
      >
        <TextArea value={token} onChange={(e) => setToken(e.target.value)} placeholder="Paste your JWT here…" className="min-h-24" />
      </Field>

      {result?.error ? <ErrorNote>{result.error}</ErrorNote> : null}

      {result && !result.error ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <Field label="Header" action={<CopyButton value={result.header} />}>
            <OutputBox value={result.header} />
          </Field>
          <Field label="Payload" action={<CopyButton value={result.payload} />}>
            <OutputBox value={result.payload} />
          </Field>
          {result.notes.length ? (
            <div className="lg:col-span-2 flex flex-col gap-2 rounded-lg border border-border bg-card p-4">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Claims</span>
              <ul className="flex flex-col gap-1 font-mono text-sm">
                {result.notes.map((n) => (
                  <li key={n} className={n.includes("EXPIRED") ? "text-destructive" : "text-foreground"}>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
