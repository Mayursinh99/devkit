"use client"

import { useMemo, useState } from "react"
import { Binary } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyButton, ErrorNote, Field, OutputBox, TextArea, ToolHeader } from "./tool-ui"

function encodeBase64(input: string, urlSafe: boolean) {
  const bytes = new TextEncoder().encode(input)
  let binary = ""
  bytes.forEach((b) => (binary += String.fromCharCode(b)))
  let out = btoa(binary)
  if (urlSafe) out = out.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
  return out
}

function decodeBase64(input: string) {
  let normalized = input.trim().replace(/-/g, "+").replace(/_/g, "/")
  while (normalized.length % 4) normalized += "="
  const binary = atob(normalized)
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

export function Base64Tool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode")
  const [urlSafe, setUrlSafe] = useState(false)
  const [input, setInput] = useState("")

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: "" }
    try {
      return { output: mode === "encode" ? encodeBase64(input, urlSafe) : decodeBase64(input), error: "" }
    } catch {
      return { output: "", error: "Invalid Base64 input — check for malformed characters." }
    }
  }, [input, mode, urlSafe])

  return (
    <div className="flex flex-col gap-6">
      <ToolHeader
        icon={Binary}
        title="Base64 Encoder / Decoder"
        description="Convert text to and from Base64. Supports UTF-8 and URL-safe variants."
      />
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex rounded-lg border border-border p-0.5">
          <Button variant={mode === "encode" ? "secondary" : "ghost"} size="sm" onClick={() => setMode("encode")}>
            Encode
          </Button>
          <Button variant={mode === "decode" ? "secondary" : "ghost"} size="sm" onClick={() => setMode("decode")}>
            Decode
          </Button>
        </div>
        <Button variant={urlSafe ? "default" : "outline"} size="sm" onClick={() => setUrlSafe((v) => !v)}>
          URL-safe {urlSafe ? "on" : "off"}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Field label={mode === "encode" ? "Plain text" : "Base64"}>
          <TextArea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encode" ? "Type or paste text…" : "Paste Base64…"}
          />
        </Field>
        <Field label="Result" action={<CopyButton value={output} />}>
          <OutputBox value={output} />
          <ErrorNote>{error}</ErrorNote>
        </Field>
      </div>
    </div>
  )
}
