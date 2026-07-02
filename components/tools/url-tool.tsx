"use client"

import { useMemo, useState } from "react"
import { Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyButton, ErrorNote, Field, OutputBox, TextArea, ToolHeader } from "./tool-ui"

export function UrlTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode")
  const [component, setComponent] = useState(true)
  const [input, setInput] = useState("")

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: "" }
    try {
      if (mode === "encode") {
        return { output: component ? encodeURIComponent(input) : encodeURI(input), error: "" }
      }
      return { output: component ? decodeURIComponent(input) : decodeURI(input), error: "" }
    } catch {
      return { output: "", error: "Invalid URL-encoded input." }
    }
  }, [input, mode, component])

  return (
    <div className="flex flex-col gap-6">
      <ToolHeader
        icon={Link2}
        title="URL Encoder / Decoder"
        description="Percent-encode or decode URLs and query parameters."
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
        <Button variant={component ? "default" : "outline"} size="sm" onClick={() => setComponent((v) => !v)}>
          {component ? "Component" : "Full URI"}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Field label="Input">
          <TextArea value={input} onChange={(e) => setInput(e.target.value)} placeholder="https://example.com/?q=hello world" />
        </Field>
        <Field label="Result" action={<CopyButton value={output} />}>
          <OutputBox value={output} />
          <ErrorNote>{error}</ErrorNote>
        </Field>
      </div>
    </div>
  )
}
