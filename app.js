const ICONS = {
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m4 17 6-6-6-6"/><path d="M12 19h8"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15 18-6-6 6-6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3"/><path d="m18 5 3 3"/></svg>',
  keySquare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 10a3 3 0 1 0-3 3"/><path d="m12 13 1.5-1.5"/><path d="M14 10h.01"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>',
  binary: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 20h4"/><path d="M14 10h4"/><path d="M6 14h2v6"/><path d="M14 4h2v6"/><rect x="6" y="4" width="4" height="6" rx="1"/><rect x="14" y="14" width="4" height="6" rx="1"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><path d="M8 12h8"/></svg>',
  hash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 9h16"/><path d="M4 15h16"/><path d="M10 3 8 21"/><path d="m16 3-2 18"/></svg>',
  fingerprint: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 10 10"/><path d="M5 19.5C5.5 17 6 15 6 12a6 6 0 0 1 12 0c0 1.5-.2 2.8-.5 4"/><path d="M9 22c.5-2.2 1-5 1-10a2 2 0 1 1 4 0c0 4.5-.6 7.3-1.2 10"/><path d="M13.8 16c1.4-2.8 1.1-8-1.8-8a4 4 0 0 0-4 4"/></svg>',
  regex: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 3v18"/><path d="m12.7 4.9 8.6 4.9"/><path d="m21.3 14.2-8.6 4.9"/><path d="M6 12h.01"/><path d="M10 12h.01"/><path d="M2 12h.01"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/></svg>',
  braces: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 3H7a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-3a2 2 0 0 1 2-2 2 2 0 0 1-2-2V9a2 2 0 0 0-2-2h-1"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M16 8h5V3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V5a1 1 0 0 1 1-1c2 0 4.9-1.2 6.2-2.2a1.3 1.3 0 0 1 1.6 0C14.1 2.8 17 4 19 4a1 1 0 0 1 1 1z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 14l4-4"/><path d="M3.3 17a10 10 0 1 1 17.4 0"/><path d="M6.3 17h11.4"/></svg>',
  loader: '<svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12a9 9 0 1 1-6.2-8.56"/></svg>'
};

const GROUPS = [
  { label: "Tokens", items: [{ id: "jwt-decoder", name: "JWT Decoder", icon: "key", desc: "Inspect a JWT's header, payload, and claims." }, { id: "jwt-generator", name: "JWT Generator", icon: "keySquare", desc: "Build and sign an HMAC-based JWT." }] },
  { label: "Encoding", items: [{ id: "base64", name: "Base64", icon: "binary", desc: "Encode or decode Base64 (UTF-8 and URL-safe)." }, { id: "url", name: "URL Encode", icon: "link", desc: "Percent-encode or decode URLs and query params." }] },
  { label: "Generate", items: [{ id: "hash", name: "Hash", icon: "hash", desc: "SHA-1/256/384/512 digests from any text." }, { id: "uuid", name: "UUID", icon: "fingerprint", desc: "Generate random version 4 UUIDs." }] },
  { label: "Inspect", items: [{ id: "regex", name: "Regex Tester", icon: "regex", desc: "Test regex with live match highlighting." }, { id: "headers", name: "HTTP Headers", icon: "globe", desc: "View response headers for CORS-open URLs." }, { id: "json", name: "JSON Formatter", icon: "braces", desc: "Validate, beautify, or minify JSON." }] },
  { label: "Security", items: [{ id: "cvss", name: "CVSS Calculator", icon: "gauge", desc: "CVSS v3.1 base score and vector string." }, { id: "security-headers", name: "Header Auditor", icon: "shield", desc: "Check response headers for hardening controls." }, { id: "csp", name: "CSP Analyzer", icon: "lock", desc: "Review a CSP for risky or missing directives." }, { id: "password", name: "Password Check", icon: "key", desc: "Estimate password strength locally." }] }
];

const state = {
  active: "home",
  mobileOpen: false,
  jwtGenerator: {
    alg: "HS256",
    payload: JSON.stringify({ sub: "1234567890", name: "Ada Lovelace", iat: Math.floor(Date.now() / 1000) }, null, 2),
    secret: "your-256-bit-secret"
  },
  uuidCount: 5,
  uuids: []
};

const panel = document.querySelector("[data-tool-panel]");

document.querySelectorAll("[data-icon]").forEach((node) => {
  node.innerHTML = icon(node.dataset.icon);
});

function icon(name) {
  return ICONS[name] || "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function toolHeader(iconName, title, description) {
  return `
    <div class="tool-topbar">
      <button class="button outline sm back-button" type="button" data-tool="home">${icon("chevronLeft")}Back to all tools</button>
    </div>
    <div class="tool-header">
      <div class="tool-icon">${icon(iconName)}</div>
      <div>
        <h1>${title}</h1>
        <p class="description">${description}</p>
      </div>
    </div>
  `;
}

function field(label, content, options = {}) {
  return `
    <div class="field">
      ${fieldInner(label, content, options)}
    </div>
  `;
}

function fieldInner(label, content, options = {}) {
  return `
    <div class="field-row">
      <label class="field-label">${label}</label>
      ${options.action || ""}
    </div>
    ${content}
    ${options.hint ? `<p class="hint">${options.hint}</p>` : ""}
  `;
}

function textArea(id, value = "", placeholder = "", extra = "") {
  return `<textarea id="${id}" class="text-area ${extra}" spellcheck="false" placeholder="${escapeHtml(placeholder)}">${escapeHtml(value)}</textarea>`;
}

function textInput(id, value = "", placeholder = "", extra = "", type = "text") {
  return `<input id="${id}" class="text-input ${extra}" type="${type}" spellcheck="false" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}">`;
}

function outputBox(value, placeholder = "Output will appear here", extra = "") {
  const empty = !value;
  return `<pre class="output ${empty ? "empty" : ""} ${extra}">${escapeHtml(value || placeholder)}</pre>`;
}

function errorNote(message) {
  return `<div class="error ${message ? "visible" : ""}">${escapeHtml(message || "")}</div>`;
}

function copyButton(value, label = "Copy") {
  return `<button class="button outline xs" type="button" data-copy="${escapeHtml(value)}" ${value ? "" : "disabled"}>${icon("copy")}<span>${label}</span></button>`;
}

function segmented(items, active, attr) {
  return `<div class="segmented">${items.map((item) => `
    <button class="button sm ${active === item.value ? "secondary" : "ghost"}" type="button" ${attr}="${item.value}">${item.label}</button>
  `).join("")}</div>`;
}

function bindCopyButtons(scope = document) {
  scope.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copy;
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const temp = document.createElement("textarea");
        temp.value = value;
        document.body.append(temp);
        temp.select();
        document.execCommand("copy");
        temp.remove();
      }
      const original = button.innerHTML;
      button.innerHTML = `${icon("check")}<span>Copied</span>`;
      setTimeout(() => {
        button.innerHTML = original;
      }, 1400);
    });
  });
}

function encodeBase64(input, urlSafe) {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  let out = btoa(binary);
  if (urlSafe) out = out.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return out;
}

function decodeBase64(input) {
  let normalized = input.trim().replace(/-/g, "+").replace(/_/g, "/");
  while (normalized.length % 4) normalized += "=";
  const binary = atob(normalized);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function b64url(bytes) {
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlStr(str) {
  return b64url(new TextEncoder().encode(str));
}

function b64urlDecode(part) {
  let s = part.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const binary = atob(s);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function renderBase64() {
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("binary", "Base64 Encoder / Decoder", "Convert text to and from Base64. Supports UTF-8 and URL-safe variants.")}
      <div class="toolbar">
        ${segmented([{ value: "encode", label: "Encode" }, { value: "decode", label: "Decode" }], "encode", "data-mode")}
        <button class="button outline sm" type="button" data-url-safe>URL-safe off</button>
      </div>
      <div class="grid-2">
        ${field("Plain text", textArea("base64-input", "", "Type or paste text..."))}
        ${field("Result", outputBox(""), { action: copyButton("") })}
      </div>
      ${errorNote("")}
    </div>
  `;

  let mode = "encode";
  let urlSafe = false;
  const input = panel.querySelector("#base64-input");
  const resultField = panel.querySelectorAll(".field")[1];
  const urlButton = panel.querySelector("[data-url-safe]");
  const error = panel.querySelector(".error");

  function update() {
    let output = "";
    let message = "";
    try {
      output = input.value ? (mode === "encode" ? encodeBase64(input.value, urlSafe) : decodeBase64(input.value)) : "";
    } catch {
      message = "Invalid Base64 input - check for malformed characters.";
    }
    resultField.innerHTML = fieldInner("Result", outputBox(output), { action: copyButton(output) });
    error.className = `error ${message ? "visible" : ""}`;
    error.textContent = message;
    bindCopyButtons(resultField);
  }

  panel.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      mode = button.dataset.mode;
      panel.querySelectorAll("[data-mode]").forEach((b) => b.className = `button sm ${b.dataset.mode === mode ? "secondary" : "ghost"}`);
      panel.querySelector(".field-label").textContent = mode === "encode" ? "Plain text" : "Base64";
      input.placeholder = mode === "encode" ? "Type or paste text..." : "Paste Base64...";
      update();
    });
  });
  urlButton.addEventListener("click", () => {
    urlSafe = !urlSafe;
    urlButton.className = `button ${urlSafe ? "" : "outline"} sm`;
    urlButton.textContent = `URL-safe ${urlSafe ? "on" : "off"}`;
    update();
  });
  input.addEventListener("input", update);
}

function renderUrl() {
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("link", "URL Encoder / Decoder", "Percent-encode or decode URLs and query parameters.")}
      <div class="toolbar">
        ${segmented([{ value: "encode", label: "Encode" }, { value: "decode", label: "Decode" }], "encode", "data-mode")}
        <button class="button sm" type="button" data-component>Component</button>
      </div>
      <div class="grid-2">
        ${field("Input", textArea("url-input", "", "https://example.com/?q=hello world"))}
        ${field("Result", outputBox(""), { action: copyButton("") })}
      </div>
      ${errorNote("")}
    </div>
  `;

  let mode = "encode";
  let component = true;
  const input = panel.querySelector("#url-input");
  const resultField = panel.querySelectorAll(".field")[1];
  const componentButton = panel.querySelector("[data-component]");
  const error = panel.querySelector(".error");

  function update() {
    let output = "";
    let message = "";
    try {
      if (input.value) output = mode === "encode"
        ? (component ? encodeURIComponent(input.value) : encodeURI(input.value))
        : (component ? decodeURIComponent(input.value) : decodeURI(input.value));
    } catch {
      message = "Invalid URL-encoded input.";
    }
    resultField.innerHTML = fieldInner("Result", outputBox(output), { action: copyButton(output) });
    error.className = `error ${message ? "visible" : ""}`;
    error.textContent = message;
    bindCopyButtons(resultField);
  }

  panel.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      mode = button.dataset.mode;
      panel.querySelectorAll("[data-mode]").forEach((b) => b.className = `button sm ${b.dataset.mode === mode ? "secondary" : "ghost"}`);
      update();
    });
  });
  componentButton.addEventListener("click", () => {
    component = !component;
    componentButton.textContent = component ? "Component" : "Full URI";
    componentButton.className = `button ${component ? "" : "outline"} sm`;
    update();
  });
  input.addEventListener("input", update);
}

function renderJson() {
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("braces", "JSON Formatter", "Validate, beautify, or minify JSON. Errors are reported inline.")}
      <div class="toolbar">
        ${segmented([{ value: "beautify", label: "Beautify" }, { value: "minify", label: "Minify" }], "beautify", "data-action")}
        <div class="segmented" data-indent-wrap>
          <button class="button secondary sm" type="button" data-indent="2">2 spaces</button>
          <button class="button ghost sm" type="button" data-indent="4">4 spaces</button>
        </div>
      </div>
      <div class="grid-2">
        ${field("Input", textArea("json-input", "", '{"hello":"world"}', "tall"))}
        ${field("Output", outputBox("", "Output will appear here", "tall"), { action: copyButton(""), hint: "" })}
      </div>
      ${errorNote("")}
    </div>
  `;

  let action = "beautify";
  let indent = 2;
  const input = panel.querySelector("#json-input");
  const outputField = panel.querySelectorAll(".field")[1];
  const error = panel.querySelector(".error");

  function update() {
    let output = "";
    let message = "";
    let stats = "";
    if (input.value.trim()) {
      try {
        const parsed = JSON.parse(input.value);
        output = action === "beautify" ? JSON.stringify(parsed, null, indent) : JSON.stringify(parsed);
        stats = `${output.length} chars · ${new Blob([output]).size} bytes`;
      } catch (e) {
        message = e.message;
      }
    }
    outputField.innerHTML = fieldInner("Output", outputBox(output, "Output will appear here", "tall"), { action: copyButton(output), hint: stats });
    error.className = `error ${message ? "visible" : ""}`;
    error.textContent = message;
    bindCopyButtons(outputField);
  }

  panel.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      action = button.dataset.action;
      panel.querySelectorAll("[data-action]").forEach((b) => b.className = `button sm ${b.dataset.action === action ? "secondary" : "ghost"}`);
      panel.querySelector("[data-indent-wrap]").style.display = action === "beautify" ? "inline-flex" : "none";
      update();
    });
  });
  panel.querySelectorAll("[data-indent]").forEach((button) => {
    button.addEventListener("click", () => {
      indent = Number(button.dataset.indent);
      panel.querySelectorAll("[data-indent]").forEach((b) => b.className = `button sm ${Number(b.dataset.indent) === indent ? "secondary" : "ghost"}`);
      update();
    });
  });
  input.addEventListener("input", update);
}

function renderJwtDecoder() {
  const sample = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("key", "JWT Decoder", "Inspect the header, payload, and claims of a JSON Web Token. Decoding happens entirely in your browser.")}
      ${field("Encoded token", textArea("jwt-input", "", "Paste your JWT here...", "short"), { action: '<button class="link-button" type="button" data-load-sample>Load sample</button>' })}
      <div data-jwt-result></div>
    </div>
  `;

  const input = panel.querySelector("#jwt-input");
  const result = panel.querySelector("[data-jwt-result]");

  function formatClaims(payload) {
    const notes = [];
    const now = Math.floor(Date.now() / 1000);
    const fmt = (n) => typeof n === "number" ? new Date(n * 1000).toLocaleString() : "";
    if (typeof payload.exp === "number") notes.push({ text: `exp: ${fmt(payload.exp)} ${payload.exp < now ? "(EXPIRED)" : "(valid)"}`, expired: payload.exp < now });
    if (typeof payload.iat === "number") notes.push({ text: `iat: ${fmt(payload.iat)}` });
    if (typeof payload.nbf === "number") notes.push({ text: `nbf: ${fmt(payload.nbf)}` });
    return notes;
  }

  function update() {
    if (!input.value.trim()) {
      result.innerHTML = "";
      return;
    }
    const parts = input.value.trim().split(".");
    if (parts.length < 2) {
      result.innerHTML = errorNote("A JWT must have at least header and payload segments.");
      return;
    }
    try {
      const header = JSON.parse(b64urlDecode(parts[0]));
      const payload = JSON.parse(b64urlDecode(parts[1]));
      const headerText = JSON.stringify(header, null, 2);
      const payloadText = JSON.stringify(payload, null, 2);
      const notes = formatClaims(payload);
      result.innerHTML = `
        <div class="grid-2">
          ${field("Header", outputBox(headerText), { action: copyButton(headerText) })}
          ${field("Payload", outputBox(payloadText), { action: copyButton(payloadText) })}
        </div>
        ${notes.length ? `
          <div class="claim-card">
            <span class="field-label">Claims</span>
            <ul class="claim-list">${notes.map((note) => `<li class="${note.expired ? "danger-text" : ""}">${escapeHtml(note.text)}</li>`).join("")}</ul>
          </div>
        ` : ""}
      `;
      bindCopyButtons(result);
    } catch {
      result.innerHTML = errorNote("Failed to decode - this does not look like a valid JWT.");
    }
  }

  panel.querySelector("[data-load-sample]").addEventListener("click", () => {
    input.value = sample;
    update();
  });
  input.addEventListener("input", update);
}

async function signJwt(input, secret, alg) {
  const hash = { HS256: "SHA-256", HS384: "SHA-384", HS512: "SHA-512" }[alg];
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(input));
  return b64url(new Uint8Array(sig));
}

function renderJwtGenerator() {
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("keySquare", "JWT Generator", "Build and sign a JSON Web Token with an HMAC secret. Signing runs locally via Web Crypto.")}
      <div class="toolbar">${segmented(["HS256", "HS384", "HS512"].map((a) => ({ value: a, label: a })), state.jwtGenerator.alg, "data-alg")}</div>
      <div class="grid-2">
        ${field("Payload (JSON)", textArea("jwt-payload", state.jwtGenerator.payload, "", "tall"))}
        <div class="tool">
          ${field("Secret", textInput("jwt-secret", state.jwtGenerator.secret, "HMAC secret"))}
          ${field("Signed token", outputBox("", "Output will appear here", "short"), { action: copyButton("") })}
        </div>
      </div>
      ${errorNote("")}
    </div>
  `;

  const payload = panel.querySelector("#jwt-payload");
  const secret = panel.querySelector("#jwt-secret");
  const tokenField = panel.querySelectorAll(".field")[2];
  const error = panel.querySelector(".error");

  async function update() {
    state.jwtGenerator.payload = payload.value;
    state.jwtGenerator.secret = secret.value;
    try {
      const parsed = JSON.parse(payload.value);
      const header = { alg: state.jwtGenerator.alg, typ: "JWT" };
      const unsigned = `${b64urlStr(JSON.stringify(header))}.${b64urlStr(JSON.stringify(parsed))}`;
      const token = `${unsigned}.${await signJwt(unsigned, secret.value, state.jwtGenerator.alg)}`;
      tokenField.innerHTML = fieldInner("Signed token", outputBox(token, "Output will appear here", "short"), { action: copyButton(token) });
      error.className = "error";
      error.textContent = "";
      bindCopyButtons(tokenField);
    } catch {
      tokenField.innerHTML = fieldInner("Signed token", outputBox("", "Output will appear here", "short"), { action: copyButton("") });
      error.className = "error visible";
      error.textContent = "Payload must be valid JSON.";
    }
  }

  panel.querySelectorAll("[data-alg]").forEach((button) => {
    button.addEventListener("click", () => {
      state.jwtGenerator.alg = button.dataset.alg;
      panel.querySelectorAll("[data-alg]").forEach((b) => b.className = `button sm ${b.dataset.alg === state.jwtGenerator.alg ? "secondary" : "ghost"}`);
      update();
    });
  });
  payload.addEventListener("input", update);
  secret.addEventListener("input", update);
  update();
}

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function renderHash() {
  const algos = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("hash", "Hash Generator", "Generate SHA-1, SHA-256, SHA-384, and SHA-512 digests from any text.")}
      ${field("Input text", textArea("hash-input", "", "Type text to hash...", "short"))}
      <div class="cards" data-hash-cards>${algos.map((algo) => hashCard(algo, "")).join("")}</div>
    </div>
  `;

  const input = panel.querySelector("#hash-input");
  const cards = panel.querySelector("[data-hash-cards]");

  async function update() {
    const values = {};
    if (input.value) {
      const data = new TextEncoder().encode(input.value);
      await Promise.all(algos.map(async (algo) => {
        values[algo] = toHex(await crypto.subtle.digest(algo, data));
      }));
    }
    cards.innerHTML = algos.map((algo) => hashCard(algo, values[algo] || "")).join("");
    bindCopyButtons(cards);
  }
  input.addEventListener("input", update);
}

function hashCard(algo, value) {
  return `
    <div class="hash-card">
      <div class="hash-head">
        <span class="hash-name">${algo}</span>
        ${copyButton(value)}
      </div>
      <p class="hash-value">${value ? escapeHtml(value) : '<span class="empty-token">-</span>'}</p>
    </div>
  `;
}

function renderUuid() {
  if (!state.uuids.length) generateUuids();
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("fingerprint", "UUID Generator", "Generate cryptographically random version 4 UUIDs.")}
      <div class="toolbar">
        ${field("How many", textInput("uuid-count", state.uuidCount, "", "count", "number"))}
        <button class="button" type="button" data-generate>${icon("refresh")}Generate</button>
        ${copyButton(state.uuids.join("\n"), "Copy all")}
      </div>
      <div class="cards" data-uuid-list>
        ${state.uuids.map((id, i) => uuidRow(id, i)).join("")}
      </div>
    </div>
  `;

  const count = panel.querySelector("#uuid-count");
  count.min = 1;
  count.max = 100;
  count.addEventListener("input", () => {
    state.uuidCount = Number(count.value);
  });
  panel.querySelector("[data-generate]").addEventListener("click", () => {
    generateUuids();
    renderUuid();
  });
  bindCopyButtons(panel);
}

function generateUuids() {
  const safeCount = Math.min(Math.max(Number(state.uuidCount) || 1, 1), 100);
  state.uuidCount = safeCount;
  state.uuids = Array.from({ length: safeCount }, () => crypto.randomUUID());
}

function uuidRow(id) {
  return `
    <div class="uuid-row">
      <span class="uuid-text">${id}</span>
      <button class="button ghost icon-only" type="button" aria-label="Copy UUID" data-copy="${id}">${icon("copy")}</button>
    </div>
  `;
}

function renderRegex() {
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("regex", "Regex Tester", "Test JavaScript regular expressions against sample text with live match highlighting.")}
      <div class="grid-2">
        <div class="tool">
          ${field("Pattern", `<div class="regex-pattern-row"><span class="mono muted">/</span>${textInput("regex-pattern", "\\b\\w+@\\w+\\.\\w+\\b")}<span class="mono muted" data-regex-flags>/gi</span></div>`)}
          ${field("Flags", '<div class="toolbar" data-flags></div>')}
          ${field("Test string", textArea("regex-test", "Contact ada@example.com or grace@dev.io for access.", "", "short"))}
        </div>
        <div class="tool">
          ${field('Matches (0)', '<div class="match-box"><span class="empty-token">No matches</span></div>')}
          ${errorNote("")}
          <div class="cards" data-match-list></div>
        </div>
      </div>
    </div>
  `;

  let flags = "gi";
  const flagList = [{ flag: "g", label: "global" }, { flag: "i", label: "ignore case" }, { flag: "m", label: "multiline" }, { flag: "s", label: "dotall" }, { flag: "u", label: "unicode" }];
  const flagsHost = panel.querySelector("[data-flags]");
  const pattern = panel.querySelector("#regex-pattern");
  const test = panel.querySelector("#regex-test");
  const flagText = panel.querySelector("[data-regex-flags]");
  const matchField = panel.querySelectorAll(".field")[3];
  const error = panel.querySelector(".error");
  const matchList = panel.querySelector("[data-match-list]");

  function renderFlagButtons() {
    flagsHost.innerHTML = flagList.map(({ flag, label }) => `<button class="button xs ${flags.includes(flag) ? "" : "outline"}" type="button" data-flag="${flag}">${flag} · ${label}</button>`).join("");
    flagsHost.querySelectorAll("[data-flag]").forEach((button) => {
      button.addEventListener("click", () => {
        flags = flags.includes(button.dataset.flag) ? flags.replace(button.dataset.flag, "") : flags + button.dataset.flag;
        renderFlagButtons();
        update();
      });
    });
  }

  function update() {
    flagText.textContent = `/${flags}`;
    try {
      const re = new RegExp(pattern.value, flags.includes("g") ? flags : flags + "g");
      const matches = [];
      let match;
      let guard = 0;
      while ((match = re.exec(test.value)) !== null && guard < 5000) {
        matches.push({ index: match.index, length: match[0].length, text: match[0], groups: match.slice(1) });
        if (match.index === re.lastIndex) re.lastIndex++;
        guard++;
      }
      matchField.querySelector(".field-label").textContent = `Matches (${matches.length})`;
      matchField.querySelector(".match-box").innerHTML = matches.length ? highlightMatches(test.value, matches) : '<span class="empty-token">No matches</span>';
      error.className = "error";
      error.textContent = "";
      matchList.innerHTML = matches.map((m) => `
        <div class="match-card">
          <span class="mono accent-text">${escapeHtml(m.text)}</span>
          <span class="match-index">at index ${m.index}</span>
          ${m.groups.length ? `<span class="group-text">groups: ${m.groups.map((g, i) => `$${i + 1}=${g ?? "..."}`).join("  ")}</span>` : ""}
        </div>
      `).join("");
    } catch (e) {
      matchField.querySelector(".field-label").textContent = "Matches (0)";
      matchField.querySelector(".match-box").innerHTML = '<span class="empty-token">-</span>';
      error.className = "error visible";
      error.textContent = e.message;
      matchList.innerHTML = "";
    }
  }

  pattern.addEventListener("input", update);
  test.addEventListener("input", update);
  renderFlagButtons();
  update();
}

function highlightMatches(text, matches) {
  let cursor = 0;
  let html = "";
  matches.forEach((m) => {
    if (m.index > cursor) html += `<span>${escapeHtml(text.slice(cursor, m.index))}</span>`;
    html += `<mark>${escapeHtml(text.slice(m.index, m.index + m.length))}</mark>`;
    cursor = m.index + m.length;
  });
  if (cursor < text.length) html += `<span>${escapeHtml(text.slice(cursor))}</span>`;
  return html;
}

function renderHeaders() {
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("globe", "HTTP Header Viewer", "Inspect HTTP response headers for public URLs that allow browser CORS access.")}
      <form class="toolbar" data-header-form>
        <div style="flex:1 1 320px">${field("URL", textInput("header-url", "https://vercel.com", "https://example.com"))}</div>
        <button class="button" type="submit" data-fetch>${icon("globe")}Fetch headers</button>
      </form>
      ${errorNote("")}
      <div data-header-result></div>
    </div>
  `;

  const form = panel.querySelector("[data-header-form]");
  const input = panel.querySelector("#header-url");
  const error = panel.querySelector(".error");
  const resultHost = panel.querySelector("[data-header-result]");
  const button = panel.querySelector("[data-fetch]");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let target = input.value.trim();
    if (!target) return;
    if (!/^https?:\/\//i.test(target)) target = `https://${target}`;
    try {
      new URL(target);
    } catch {
      error.className = "error visible";
      error.textContent = "That does not look like a valid URL.";
      return;
    }

    button.innerHTML = `${icon("loader")}Fetch headers`;
    button.disabled = true;
    error.className = "error";
    error.textContent = "";
    resultHost.innerHTML = "";

    try {
      const response = await fetch(target, { method: "GET", redirect: "follow", mode: "cors" });
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      renderHeaderResult(resultHost, response.url, response.status, response.statusText, headers);
    } catch {
      error.className = "error visible";
      error.textContent = "Browser CORS blocked this request. The original Next.js app used a server API route for this tool.";
    } finally {
      button.innerHTML = `${icon("globe")}Fetch headers`;
      button.disabled = false;
    }
  });
}

function renderHeaderResult(host, url, status, statusText, headers) {
  const entries = Object.entries(headers);
  const statusClass = status < 300 ? "ok" : status < 400 ? "redirect" : "bad";
  const copy = entries.map(([key, value]) => `${key}: ${value}`).join("\n");
  host.innerHTML = `
    <div class="tool">
      <div class="status-row">
        <span class="status-code ${statusClass}">${status} ${escapeHtml(statusText)}</span>
        <span class="status-url">${escapeHtml(url)}</span>
      </div>
      ${field(`Response headers (${entries.length})`, `
        <div class="headers-table">
          ${entries.map(([key, value]) => `
            <div class="header-row">
              <span class="header-key">${escapeHtml(key)}</span>
              <span class="header-value">${escapeHtml(value)}</span>
            </div>
          `).join("")}
        </div>
      `, { action: copyButton(copy) })}
    </div>
  `;
  bindCopyButtons(host);
}

function renderCvss() {
  const metrics = [
    { key: "AV", label: "Attack Vector", values: [["N", "Network"], ["A", "Adjacent"], ["L", "Local"], ["P", "Physical"]] },
    { key: "AC", label: "Attack Complexity", values: [["L", "Low"], ["H", "High"]] },
    { key: "PR", label: "Privileges Required", values: [["N", "None"], ["L", "Low"], ["H", "High"]] },
    { key: "UI", label: "User Interaction", values: [["N", "None"], ["R", "Required"]] },
    { key: "S", label: "Scope", values: [["U", "Unchanged"], ["C", "Changed"]] },
    { key: "C", label: "Confidentiality", values: [["H", "High"], ["L", "Low"], ["N", "None"]] },
    { key: "I", label: "Integrity", values: [["H", "High"], ["L", "Low"], ["N", "None"]] },
    { key: "A", label: "Availability", values: [["H", "High"], ["L", "Low"], ["N", "None"]] }
  ];

  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("gauge", "CVSS v3.1 Calculator", "Calculate a base score and vector string for authorized vulnerability triage.")}
      <div class="metric-grid">
        ${metrics.map((metric) => `
          <div class="metric-card">
            <span class="field-label">${metric.label}</span>
            <div class="segmented metric-options">
              ${metric.values.map(([value, label], index) => `<button class="button sm ${index === 0 ? "secondary" : "ghost"}" type="button" data-metric="${metric.key}" data-value="${value}">${label}</button>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      <div class="score-card">
        <div>
          <span class="field-label">Base score</span>
          <p class="score-value" data-cvss-score>0.0</p>
        </div>
        <div>
          <span class="field-label">Severity</span>
          <p class="score-severity" data-cvss-severity>None</p>
        </div>
      </div>
      ${field("Vector", outputBox("", "CVSS:3.1/..."), { action: copyButton("") })}
    </div>
  `;

  const selected = { AV: "N", AC: "L", PR: "N", UI: "N", S: "U", C: "H", I: "H", A: "H" };
  const vectorField = panel.querySelector(".field");

  function roundUp1(value) {
    return Math.ceil(value * 10) / 10;
  }

  function update() {
    const weights = {
      AV: { N: 0.85, A: 0.62, L: 0.55, P: 0.2 },
      AC: { L: 0.77, H: 0.44 },
      UI: { N: 0.85, R: 0.62 },
      C: { H: 0.56, L: 0.22, N: 0 },
      I: { H: 0.56, L: 0.22, N: 0 },
      A: { H: 0.56, L: 0.22, N: 0 }
    };
    const pr = selected.S === "U"
      ? { N: 0.85, L: 0.62, H: 0.27 }[selected.PR]
      : { N: 0.85, L: 0.68, H: 0.5 }[selected.PR];
    const impactSub = 1 - ((1 - weights.C[selected.C]) * (1 - weights.I[selected.I]) * (1 - weights.A[selected.A]));
    const impact = selected.S === "U" ? 6.42 * impactSub : 7.52 * (impactSub - 0.029) - 3.25 * Math.pow(impactSub - 0.02, 15);
    const exploitability = 8.22 * weights.AV[selected.AV] * weights.AC[selected.AC] * pr * weights.UI[selected.UI];
    const score = impact <= 0 ? 0 : selected.S === "U" ? roundUp1(Math.min(impact + exploitability, 10)) : roundUp1(Math.min(1.08 * (impact + exploitability), 10));
    const severity = score === 0 ? "None" : score < 4 ? "Low" : score < 7 ? "Medium" : score < 9 ? "High" : "Critical";
    const vector = `CVSS:3.1/AV:${selected.AV}/AC:${selected.AC}/PR:${selected.PR}/UI:${selected.UI}/S:${selected.S}/C:${selected.C}/I:${selected.I}/A:${selected.A}`;
    panel.querySelector("[data-cvss-score]").textContent = score.toFixed(1);
    panel.querySelector("[data-cvss-severity]").textContent = severity;
    vectorField.innerHTML = fieldInner("Vector", outputBox(vector), { action: copyButton(vector) });
    bindCopyButtons(vectorField);
  }

  panel.querySelectorAll("[data-metric]").forEach((button) => {
    button.addEventListener("click", () => {
      selected[button.dataset.metric] = button.dataset.value;
      panel.querySelectorAll(`[data-metric="${button.dataset.metric}"]`).forEach((item) => {
        item.className = `button sm ${item === button ? "secondary" : "ghost"}`;
      });
      update();
    });
  });
  update();
}

function parseHeaderLines(input) {
  const headers = {};
  input.split(/\r?\n/).forEach((line) => {
    const index = line.indexOf(":");
    if (index > 0) {
      headers[line.slice(0, index).trim().toLowerCase()] = line.slice(index + 1).trim();
    }
  });
  return headers;
}

function renderSecurityHeaders() {
  const sample = [
    "Strict-Transport-Security: max-age=31536000; includeSubDomains",
    "Content-Security-Policy: default-src 'self'; object-src 'none'; frame-ancestors 'none'",
    "X-Content-Type-Options: nosniff",
    "Referrer-Policy: strict-origin-when-cross-origin",
    "Permissions-Policy: camera=(), microphone=(), geolocation=()"
  ].join("\n");

  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("shield", "Security Header Auditor", "Paste HTTP response headers and check for common browser hardening controls.")}
      ${field("Response headers", textArea("sec-headers-input", sample, "Header-Name: value", "tall"))}
      <div class="cards" data-header-audit></div>
    </div>
  `;

  const input = panel.querySelector("#sec-headers-input");
  const host = panel.querySelector("[data-header-audit]");
  const checks = [
    { key: "strict-transport-security", name: "HSTS", pass: (v) => /max-age=\d+/i.test(v), fix: "Set Strict-Transport-Security with a meaningful max-age; add includeSubDomains when safe." },
    { key: "content-security-policy", name: "Content Security Policy", pass: (v) => /default-src|script-src|object-src/i.test(v), fix: "Add a restrictive CSP. Avoid unsafe-inline and broad wildcards where possible." },
    { key: "x-content-type-options", name: "MIME Sniffing", pass: (v) => /^nosniff$/i.test(v), fix: "Set X-Content-Type-Options: nosniff." },
    { key: "referrer-policy", name: "Referrer Policy", pass: (v) => Boolean(v), fix: "Set Referrer-Policy, commonly strict-origin-when-cross-origin or no-referrer." },
    { key: "permissions-policy", name: "Permissions Policy", pass: (v) => Boolean(v), fix: "Restrict sensitive browser features with Permissions-Policy." },
    { key: "x-frame-options", name: "Clickjacking Fallback", pass: (v, h) => Boolean(v) || /frame-ancestors/i.test(h["content-security-policy"] || ""), fix: "Use CSP frame-ancestors, with X-Frame-Options as a legacy fallback if needed." },
    { key: "cross-origin-opener-policy", name: "COOP", pass: (v) => Boolean(v), fix: "Consider Cross-Origin-Opener-Policy for isolation-sensitive apps." }
  ];

  function update() {
    const headers = parseHeaderLines(input.value);
    host.innerHTML = checks.map((check) => {
      const value = headers[check.key] || "";
      const passed = check.pass(value, headers);
      return `
        <div class="audit-row ${passed ? "pass" : "warn"}">
          <span class="audit-status">${passed ? "Pass" : "Review"}</span>
          <div>
            <p class="audit-title">${check.name}</p>
            <p class="audit-detail">${passed ? escapeHtml(value || "Covered by related policy.") : check.fix}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  input.addEventListener("input", update);
  update();
}

function parseCsp(policy) {
  const directives = {};
  policy.split(";").map((part) => part.trim()).filter(Boolean).forEach((part) => {
    const [name, ...values] = part.split(/\s+/);
    directives[name.toLowerCase()] = values;
  });
  return directives;
}

function renderCspAnalyzer() {
  const sample = "default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'";
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("lock", "CSP Analyzer", "Review a Content-Security-Policy for risky directives and missing protections.")}
      ${field("Content-Security-Policy", textArea("csp-input", sample, "default-src 'self'; script-src 'self'", "tall"))}
      <div class="cards" data-csp-results></div>
    </div>
  `;

  const input = panel.querySelector("#csp-input");
  const host = panel.querySelector("[data-csp-results]");

  function update() {
    const csp = parseCsp(input.value);
    const findings = [];
    const script = [...(csp["script-src"] || csp["default-src"] || [])].join(" ");
    const object = csp["object-src"] || [];
    const frameAncestors = csp["frame-ancestors"] || [];

    if (!csp["default-src"]) findings.push(["Review", "Missing default-src", "Add default-src as a fallback for unspecified fetch directives."]);
    if (/unsafe-inline/i.test(script)) findings.push(["High", "unsafe-inline in scripts", "Prefer nonces or hashes instead of allowing inline scripts."]);
    if (/\*/.test(script)) findings.push(["High", "Wildcard script source", "Avoid broad script-src wildcards."]);
    if (!object.length || !object.includes("'none'")) findings.push(["Medium", "object-src not locked down", "Use object-src 'none' unless legacy plugins are required."]);
    if (!frameAncestors.length) findings.push(["Medium", "Missing frame-ancestors", "Set frame-ancestors to control which sites can embed the app."]);
    if (!csp["base-uri"]) findings.push(["Low", "Missing base-uri", "Set base-uri 'self' to reduce base tag injection risk."]);
    if (!csp["form-action"]) findings.push(["Low", "Missing form-action", "Set form-action to expected submission origins."]);
    if (!findings.length) findings.push(["Pass", "No common CSP issues found", "Policy includes the core hardening directives checked here."]);

    host.innerHTML = findings.map(([level, title, detail]) => `
      <div class="audit-row ${level === "Pass" ? "pass" : "warn"}">
        <span class="audit-status">${level}</span>
        <div>
          <p class="audit-title">${title}</p>
          <p class="audit-detail">${detail}</p>
        </div>
      </div>
    `).join("");
  }

  input.addEventListener("input", update);
  update();
}

function renderPasswordCheck() {
  panel.innerHTML = `
    <div class="tool">
      ${toolHeader("key", "Password Strength Check", "Estimate password strength locally without sending the value anywhere.")}
      ${field("Password", textInput("password-input", "", "Type a password to evaluate", "", "password"))}
      <div class="score-card">
        <div>
          <span class="field-label">Score</span>
          <p class="score-value" data-password-score>0/100</p>
        </div>
        <div>
          <span class="field-label">Rating</span>
          <p class="score-severity" data-password-rating>Empty</p>
        </div>
      </div>
      <div class="cards" data-password-advice></div>
    </div>
  `;

  const input = panel.querySelector("#password-input");
  const advice = panel.querySelector("[data-password-advice]");

  function update() {
    const value = input.value;
    const classes = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((re) => re.test(value)).length;
    const charset = [/[a-z]/.test(value) ? 26 : 0, /[A-Z]/.test(value) ? 26 : 0, /\d/.test(value) ? 10 : 0, /[^A-Za-z0-9]/.test(value) ? 32 : 0].reduce((a, b) => a + b, 0);
    const entropy = value ? Math.log2(Math.pow(Math.max(charset, 1), value.length)) : 0;
    let score = Math.min(100, Math.round(entropy * 1.6 + Math.min(value.length, 24) * 2 + classes * 5));
    if (/(.)\1{2,}/.test(value)) score -= 15;
    if (/password|admin|qwerty|letmein|welcome|123456/i.test(value)) score -= 30;
    score = Math.max(0, score);
    const rating = score >= 85 ? "Strong" : score >= 65 ? "Good" : score >= 40 ? "Weak" : value ? "Risky" : "Empty";
    const tips = [];
    if (value.length < 14) tips.push("Use at least 14 characters for sensitive accounts.");
    if (classes < 3) tips.push("Mix character types or use a longer passphrase.");
    if (/(.)\1{2,}/.test(value)) tips.push("Avoid repeated characters.");
    if (/password|admin|qwerty|letmein|welcome|123456/i.test(value)) tips.push("Avoid common words and keyboard patterns.");
    if (!tips.length && value) tips.push("Looks solid for a local estimate. Prefer a password manager and unique passwords.");
    panel.querySelector("[data-password-score]").textContent = `${score}/100`;
    panel.querySelector("[data-password-rating]").textContent = rating;
    advice.innerHTML = tips.map((tip) => `
      <div class="audit-row ${score >= 65 ? "pass" : "warn"}">
        <span class="audit-status">${score >= 65 ? "Note" : "Fix"}</span>
        <p class="audit-detail">${tip}</p>
      </div>
    `).join("");
  }

  input.addEventListener("input", update);
  update();
}

function renderHome() {
  const cards = GROUPS.map((group) => `
    <section class="home-group">
      <h2 class="home-group-label">${group.label}</h2>
      <div class="home-grid">
        ${group.items.map((item) => `
          <button class="tool-card" type="button" data-tool="${item.id}">
            <span class="tool-card-icon">${icon(item.icon)}</span>
            <span class="tool-card-body">
              <span class="tool-card-name">${item.name}</span>
              <span class="tool-card-desc">${escapeHtml(item.desc || "")}</span>
            </span>
          </button>
        `).join("")}
      </div>
    </section>
  `).join("");

  panel.innerHTML = `
    <div class="tool">
      <div class="tool-header">
        <div class="tool-icon">${icon("terminal")}</div>
        <div>
          <h1>DevKit</h1>
          <p class="description">A fast, private, 100% client-side toolbox for developers and security testers. Pick a tool to get started.</p>
        </div>
      </div>
      ${cards}
    </div>
  `;
}

function render() {
  const views = {
    home: renderHome,
    "jwt-decoder": renderJwtDecoder,
    "jwt-generator": renderJwtGenerator,
    base64: renderBase64,
    url: renderUrl,
    hash: renderHash,
    uuid: renderUuid,
    regex: renderRegex,
    headers: renderHeaders,
    json: renderJson,
    cvss: renderCvss,
    "security-headers": renderSecurityHeaders,
    csp: renderCspAnalyzer,
    password: renderPasswordCheck
  };
  (views[state.active] || renderHome)();
  bindCopyButtons(panel);
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-tool]");
  if (!trigger) return;
  state.active = trigger.dataset.tool;
  render();
});

render();
