"use client"

import { useEffect, useState } from "react"
import { Hash } from "lucide-react"
import { CopyButton, Field, TextArea, ToolHeader } from "./tool-ui"

const ALGOS = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"] as const

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

export function HashTool() {
  const [input, setInput] = useState("")
  const [hashes, setHashes] = useState<Record<string, string>>({})

  useEffect(() => {
    let active = true
    async function run() {
      if (!input) {
        setHashes({})
        return
      }
      const data = new TextEncoder().encode(input)
      const entries = await Promise.all(
        ALGOS.map(async (algo) => [algo, toHex(await crypto.subtle.digest(algo, data))] as const),
      )
      if (active) setHashes(Object.fromEntries(entries))
    }
    run()
    return () => {
      active = false
    }
  }, [input])

  return (
    <div className="flex flex-col gap-6">
      <ToolHeader
        icon={Hash}
        title="Hash Generator"
        description="Generate SHA-1, SHA-256, SHA-384, and SHA-512 digests from any text."
      />
      <Field label="Input text">
        <TextArea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type text to hash…" className="min-h-24" />
      </Field>
      <div className="flex flex-col gap-3">
        {ALGOS.map((algo) => (
          <div key={algo} className="flex flex-col gap-2 rounded-lg border border-border bg-card p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-semibold text-primary">{algo}</span>
              <CopyButton value={hashes[algo] ?? ""} />
            </div>
            <p className="font-mono text-sm break-all text-foreground">
              {hashes[algo] || <span className="text-muted-foreground/60">—</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
