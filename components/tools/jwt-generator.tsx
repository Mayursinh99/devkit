"use client"

import { useEffect, useState } from "react"
import { KeySquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyButton, ErrorNote, Field, OutputBox, TextArea, TextInput, ToolHeader } from "./tool-ui"

const ALGS = ["HS256", "HS384", "HS512"] as const
type Alg = (typeof ALGS)[number]

const HASH: Record<Alg, string> = { HS256: "SHA-256", HS384: "SHA-384", HS512: "SHA-512" }

function b64url(bytes: Uint8Array) {
  let binary = ""
  bytes.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function b64urlStr(str: string) {
  return b64url(new TextEncoder().encode(str))
}

async function sign(input: string, secret: string, alg: Alg) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: HASH[alg] },
    false,
    ["sign"],
  )
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(input))
  return b64url(new Uint8Array(sig))
}

export function JwtGenerator() {
  const [alg, setAlg] = useState<Alg>("HS256")
  const [payload, setPayload] = useState(
    JSON.stringify({ sub: "1234567890", name: "Ada Lovelace", iat: Math.floor(Date.now() / 1000) }, null, 2),
  )
  const [secret, setSecret] = useState("your-256-bit-secret")
  const [token, setToken] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    let active = true
    async function run() {
      try {
        const parsed = JSON.parse(payload)
        const header = { alg, typ: "JWT" }
        const unsigned = `${b64urlStr(JSON.stringify(header))}.${b64urlStr(JSON.stringify(parsed))}`
        const signature = await sign(unsigned, secret, alg)
        if (active) {
          setToken(`${unsigned}.${signature}`)
          setError("")
        }
      } catch {
        if (active) {
          setToken("")
          setError("Payload must be valid JSON.")
        }
      }
    }
    run()
    return () => {
      active = false
    }
  }, [alg, payload, secret])

  return (
    <div className="flex flex-col gap-6">
      <ToolHeader
        icon={KeySquare}
        title="JWT Generator"
        description="Build and sign a JSON Web Token with an HMAC secret. Signing runs locally via Web Crypto."
      />
      <div className="inline-flex w-fit rounded-lg border border-border p-0.5">
        {ALGS.map((a) => (
          <Button key={a} variant={alg === a ? "secondary" : "ghost"} size="sm" onClick={() => setAlg(a)}>
            {a}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Field label="Payload (JSON)">
          <TextArea value={payload} onChange={(e) => setPayload(e.target.value)} className="min-h-44" />
        </Field>
        <div className="flex flex-col gap-6">
          <Field label="Secret">
            <TextInput value={secret} onChange={(e) => setSecret(e.target.value)} placeholder="HMAC secret" />
          </Field>
          <Field label="Signed token" action={<CopyButton value={token} />}>
            <OutputBox value={token} className="min-h-28" />
          </Field>
        </div>
      </div>
      <ErrorNote>{error}</ErrorNote>
    </div>
  )
}
