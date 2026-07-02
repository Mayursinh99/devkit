"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, Copy, Fingerprint, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyButton, Field, TextInput, ToolHeader } from "./tool-ui"

export function UuidTool() {
  const [count, setCount] = useState(5)
  const [uuids, setUuids] = useState<string[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const generate = useCallback(() => {
    const safeCount = Math.min(Math.max(count, 1), 100)
    setUuids(Array.from({ length: safeCount }, () => crypto.randomUUID()))
  }, [count])

  useEffect(() => {
    generate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <ToolHeader
        icon={Fingerprint}
        title="UUID Generator"
        description="Generate cryptographically random version 4 UUIDs."
      />
      <div className="flex flex-wrap items-end gap-3">
        <Field label="How many">
          <TextInput
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-28"
          />
        </Field>
        <Button onClick={generate}>
          <RefreshCw />
          Generate
        </Button>
        <CopyButton value={uuids.join("\n")} label="Copy all" />
      </div>

      <div className="flex flex-col gap-2">
        {uuids.map((id, i) => (
          <div
            key={id}
            className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-3 py-2.5"
          >
            <span className="font-mono text-sm text-foreground break-all">{id}</span>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Copy UUID"
              onClick={async () => {
                await navigator.clipboard.writeText(id)
                setCopiedIndex(i)
                setTimeout(() => setCopiedIndex((c) => (c === i ? null : c)), 1200)
              }}
            >
              {copiedIndex === i ? <Check className="text-primary" /> : <Copy />}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
