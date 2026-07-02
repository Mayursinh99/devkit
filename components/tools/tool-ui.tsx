"use client"

import type React from "react"
import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ToolHeader({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="flex items-start gap-3 border-b border-border pb-5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
        <Icon className="size-5" />
      </div>
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-balance">{title}</h1>
        <p className="mt-0.5 text-sm text-muted-foreground text-pretty">{description}</p>
      </div>
    </div>
  )
}

export function Field({
  label,
  children,
  hint,
  action,
}: {
  label: string
  children: React.ReactNode
  hint?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</label>
        {action}
      </div>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  )
}

export function TextArea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      spellCheck={false}
      className={cn(
        "min-h-32 w-full resize-y rounded-lg border border-input bg-card px-3 py-2.5 font-mono text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20",
        className,
      )}
      {...props}
    />
  )
}

export function TextInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      spellCheck={false}
      className={cn(
        "h-9 w-full rounded-lg border border-input bg-card px-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20",
        className,
      )}
      {...props}
    />
  )
}

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <Button
      type="button"
      variant="outline"
      size="xs"
      disabled={!value}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setCopied(true)
          setTimeout(() => setCopied(false), 1400)
        } catch {
          /* ignore */
        }
      }}
    >
      {copied ? <Check className="text-primary" /> : <Copy />}
      {copied ? "Copied" : label}
    </Button>
  )
}

export function ErrorNote({ children }: { children: React.ReactNode }) {
  if (!children) return null
  return (
    <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
      {children}
    </div>
  )
}

export function OutputBox({
  value,
  placeholder = "Output will appear here",
  className,
}: {
  value: string
  placeholder?: string
  className?: string
}) {
  return (
    <pre
      className={cn(
        "min-h-32 w-full overflow-auto rounded-lg border border-input bg-card px-3 py-2.5 font-mono text-sm leading-relaxed whitespace-pre-wrap break-all",
        value ? "text-foreground" : "text-muted-foreground/60",
        className,
      )}
    >
      {value || placeholder}
    </pre>
  )
}
