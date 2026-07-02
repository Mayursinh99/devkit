"use client"

import { useMemo, useState } from "react"
import { Braces } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyButton, ErrorNote, Field, OutputBox, TextArea, ToolHeader } from "./tool-ui"

export function JsonTool() {
  const [input, setInput] = useState("")
  const [indent, setIndent] = useState(2)
  const [action, setAction] = useState<"beautify" | "minify">("beautify")

  const { output, error, stats } = useMemo(() => {
    if (!input.trim()) return { output: "", error: "", stats: "" }
    try {
      const parsed = JSON.parse(input)
      const out = action === "beautify" ? JSON.stringify(parsed, null, indent) : JSON.stringify(parsed)
      const size = new Blob([out]).size
      return { output: out, error: "", stats: `${out.length} chars · ${size} bytes` }
    } catch (e) {
      return { output: "", error: (e as Error).message, stats: "" }
    }
  }, [input, indent, action])

  return (
    <div className="flex flex-col gap-6">
      <ToolHeader
        icon={Braces}
        title="JSON Formatter"
        description="Validate, beautify, or minify JSON. Errors are reported inline."
      />
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex rounded-lg border border-border p-0.5">
          <Button variant={action === "beautify" ? "secondary" : "ghost"} size="sm" onClick={() => setAction("beautify")}>
            Beautify
          </Button>
          <Button variant={action === "minify" ? "secondary" : "ghost"} size="sm" onClick={() => setAction("minify")}>
            Minify
          </Button>
        </div>
        {action === "beautify" ? (
          <div className="inline-flex rounded-lg border border-border p-0.5">
            {[2, 4].map((n) => (
              <Button key={n} variant={indent === n ? "secondary" : "ghost"} size="sm" onClick={() => setIndent(n)}>
                {n} spaces
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Field label="Input">
          <TextArea value={input} onChange={(e) => setInput(e.target.value)} placeholder='{"hello":"world"}' className="min-h-64" />
        </Field>
        <Field label="Output" hint={stats} action={<CopyButton value={output} />}>
          <OutputBox value={output} className="min-h-64" />
          <ErrorNote>{error}</ErrorNote>
        </Field>
      </div>
    </div>
  )
}
