"use client"

import { useState } from "react"
import {
  Binary,
  Braces,
  Fingerprint,
  Globe,
  Hash,
  KeyRound,
  KeySquare,
  Link2,
  Menu,
  Regex,
  Terminal,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Base64Tool } from "./base64-tool"
import { HashTool } from "./hash-tool"
import { HeaderViewer } from "./header-viewer"
import { JsonTool } from "./json-tool"
import { JwtDecoder } from "./jwt-decoder"
import { JwtGenerator } from "./jwt-generator"
import { RegexTool } from "./regex-tool"
import { UrlTool } from "./url-tool"
import { UuidTool } from "./uuid-tool"

type ToolId =
  | "jwt-decoder"
  | "jwt-generator"
  | "base64"
  | "url"
  | "hash"
  | "uuid"
  | "regex"
  | "headers"
  | "json"

const GROUPS: {
  label: string
  items: { id: ToolId; name: string; icon: React.ComponentType<{ className?: string }> }[]
}[] = [
  {
    label: "Tokens",
    items: [
      { id: "jwt-decoder", name: "JWT Decoder", icon: KeyRound },
      { id: "jwt-generator", name: "JWT Generator", icon: KeySquare },
    ],
  },
  {
    label: "Encoding",
    items: [
      { id: "base64", name: "Base64", icon: Binary },
      { id: "url", name: "URL Encode", icon: Link2 },
    ],
  },
  {
    label: "Generate",
    items: [
      { id: "hash", name: "Hash", icon: Hash },
      { id: "uuid", name: "UUID", icon: Fingerprint },
    ],
  },
  {
    label: "Inspect",
    items: [
      { id: "regex", name: "Regex Tester", icon: Regex },
      { id: "headers", name: "HTTP Headers", icon: Globe },
      { id: "json", name: "JSON Formatter", icon: Braces },
    ],
  },
]

const TOOLS: Record<ToolId, React.ReactNode> = {
  "jwt-decoder": <JwtDecoder />,
  "jwt-generator": <JwtGenerator />,
  base64: <Base64Tool />,
  url: <UrlTool />,
  hash: <HashTool />,
  uuid: <UuidTool />,
  regex: <RegexTool />,
  headers: <HeaderViewer />,
  json: <JsonTool />,
}

export function Toolbox() {
  const [active, setActive] = useState<ToolId>("jwt-decoder")
  const [mobileOpen, setMobileOpen] = useState(false)

  const nav = (
    <nav className="flex flex-col gap-6">
      {GROUPS.map((group) => (
        <div key={group.label} className="flex flex-col gap-1">
          <span className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {group.label}
          </span>
          {group.items.map((item) => {
            const Icon = item.icon
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id)
                  setMobileOpen(false)
                }}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className={cn("size-4", isActive && "text-primary")} />
                {item.name}
              </button>
            )
          })}
        </div>
      ))}
    </nav>
  )

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col">
      <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Terminal className="size-4.5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">DevKit</p>
            <p className="text-xs text-muted-foreground">Developer utilities</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground sm:inline">
            100% client-side
          </span>
          <Button
            variant="outline"
            size="icon-sm"
            className="lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden w-60 shrink-0 border-r border-border p-4 lg:block">
          <div className="sticky top-20">{nav}</div>
        </aside>

        {mobileOpen ? (
          <div className="fixed inset-0 top-[57px] z-10 bg-background/95 p-4 backdrop-blur-sm lg:hidden">{nav}</div>
        ) : null}

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-4xl">{TOOLS[active]}</div>
        </main>
      </div>
    </div>
  )
}
