#!/usr/bin/env node
// Lists every unfinished placeholder (todo("...")) in the site and exits with an error while
// any remain, so you can run it before launch:   npm run check:placeholders
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["app", "components", "lib"];
const found = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(ts|tsx)$/.test(entry)) scan(path);
  }
}

function scan(file) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      if (/^\s*(\/\/|\*|\/\*)/.test(line)) return; // comments
      if (/export const todo\b/.test(line)) return; // the helper's own definition
      const re = /\btodo\(\s*(["'`])(.*?)\1\s*\)/g;
      let m;
      while ((m = re.exec(line))) found.push({ file, line: i + 1, label: m[2] });
    });
}

for (const root of ROOTS) if (existsSync(root)) walk(root);

const byFile = new Map();
for (const f of found) byFile.set(f.file, [...(byFile.get(f.file) ?? []), f]);

console.log("\nPlaceholders still to fill in\n");
if (found.length === 0) console.log("  None. All content placeholders are filled in.\n");
for (const [file, items] of byFile) {
  console.log(`  ${file}`);
  for (const it of items) console.log(`    line ${String(it.line).padEnd(4)} ${it.label}`);
  console.log("");
}

// Environment variables can only be fully verified on your host; this checks local files.
const envText = [".env.local", ".env.production", ".env"]
  .filter(existsSync)
  .map((f) => readFileSync(f, "utf8"))
  .join("\n");
const hasEnv = (key) => process.env[key] || new RegExp(`^\\s*${key}\\s*=\\s*\\S+`, "m").test(envText);
const ENV = [
  ["NEXT_PUBLIC_DEMO_PHONE", "demo phone number (shows a fake number and a warning if missing)"],
  ["NEXT_PUBLIC_SAMPLE_CALL_AUDIO", "sample call recording in /public"],
  ["NEXT_PUBLIC_BOOKING_URL", "booking-calendar link on the Book a demo page"],
  ["NEXT_PUBLIC_WEB3FORMS_KEY", "demo-request form delivery"],
  ["NEXT_PUBLIC_EMAILJS_SERVICE_ID", "confirmation email (service id)"],
  ["NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", "confirmation email (template id)"],
  ["NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", "confirmation email (public key)"],
  ["NEXT_PUBLIC_SHOW_EMERGENCY_SECTION", "set to 1 only once emergency handling is live"],
];
console.log("Environment variables (confirm these on your hosting dashboard too)\n");
for (const [key, why] of ENV) console.log(`  ${hasEnv(key) ? "set    " : "not set"}  ${key}  ${why}`);
console.log(`\n${found.length} placeholder${found.length === 1 ? "" : "s"} remaining.\n`);
process.exit(found.length ? 1 : 0);
