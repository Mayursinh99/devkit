"use client"

import { useMemo, useState } from "react"
import { Regex } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ErrorNote, Field, TextArea, TextInput, ToolHeader } from "./tool-ui"
import { cn } from "@/lib/utils"

const FLAG_LIST = [
  { flag: "g", label: "global" },
  { flag: "i", label: "ignore case" },
  { flag: "m", label: "multiline" },
  { flag: "s", label: "dotall" },
  { flag: "u", label: "unicode" },
]

type Match = { index: number; length: number; text: string; groups: string[] }

export function RegexTool() {
  const [pattern, setPattern] = useState("\\b\\w+@\\w+\\.\\w+\\b")
  const [flags, setFlags] = useState("gi")
  const [test, setTest] = useState("Contact ada@example.com or grace@dev.io for access.")

  const { matches, error } = useMemo(() => {
    if (!pattern) return { matches: [] as Match[], error: "" }
    try {
      const re = new RegExp(pattern, flags.includes("g") ? flags : flags + "g")
      const found: Match[] = []
      let m: RegExpExecArray | null
      let guard = 0
      while ((m = re.exec(test)) !== null && guard < 5000) {
        found.push({ index: m.index, length: m[0].length, text: m[0], groups: m.slice(1) })
        if (m.index === re.lastIndex) re.lastIndex++
        guard++
      }
      return { matches: found, error: "" }
    } catch (e) {
      return { matches: [] as Match[], error: (e as Error).message }
    }
  }, [pattern, flags, test])

  const highlighted = useMemo(() => {
    if (!matches.length || error) return null
    const parts: React.ReactNode[] = []
    let cursor = 0
    matches.forEach((m, i) => {
      if (m.index > cursor) parts.push(<span key={`t${i}`}>{test.slice(cursor, m.index)}</span>)
      parts.push(
        <mark key={`m${i}`} className="rounded bg-primary/25 px-0.5 text-primary-foreground">
          {test.slice(m.index, m.index + m.length)}
        </mark>,
      )
      cursor = m.index + m.length
    })
    if (cursor < test.length) parts.push(<span key="end">{test.slice(cursor)}</span>)
    return parts
  }, [matches, test, error])

  const toggleFlag = (f: string) =>
    setFlags((cur) => (cur.includes(f) ? cur.replace(f, "") : cur + f))

  return (
    <div className="flex flex-col gap-6">
      <ToolHeader
        icon={Regex}
        title="Regex Tester"
        description="Test JavaScript regular expressions against sample text with live match highlighting."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Field label="Pattern">
            <div className="flex items-center gap-2">
              <span className="font-mono text-muted-foreground">/</span>
              <TextInput value={pattern} onChange={(e) => setPattern(e.target.value)} />
              <span className="font-mono text-muted-foreground">/{flags}</span>
            </div>
          </Field>
          <Field label="Flags">
            <div className="flex flex-wrap gap-1.5">
              {FLAG_LIST.map(({ flag, label }) => (
                <Button
                  key={flag}
                  size="xs"
                  variant={flags.includes(flag) ? "default" : "outline"}
                  onClick={() => toggleFlag(flag)}
                >
                  {flag} · {label}
                </Button>
              ))}
            </div>
          </Field>
          <Field label="Test string">
            <TextArea value={test} onChange={(e) => setTest(e.target.value)} className="min-h-36" />
          </Field>
        </div>

        <div className="flex flex-col gap-4">
          <Field label={`Matches (${matches.length})`}>
            <div className="min-h-36 rounded-lg border border-input bg-card px-3 py-2.5 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
              {error ? <span className="text-muted-foreground/60">—</span> : highlighted ?? <span className="text-muted-foreground/60">No matches</span>}
            </div>
          </Field>
          <ErrorNote>{error}</ErrorNote>
          {matches.length ? (
            <div className="flex flex-col gap-2">
              {matches.map((m, i) => (
                <div key={i} className={cn("rounded-lg border border-border bg-card px-3 py-2 text-sm")}>
                  <span className="font-mono text-primary">{m.text}</span>
                  <span className="ml-2 text-xs text-muted-foreground">at index {m.index}</span>
                  {m.groups.length ? (
                    <div className="mt-1 font-mono text-xs text-muted-foreground">
                      groups: {m.groups.map((g, gi) => `$${gi + 1}=${g ?? "∅"}`).join("  ")}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
