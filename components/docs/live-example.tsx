"use client";

import * as React from "react";
import { Check, ChevronDown, Copy } from "lucide-react";
import { demos } from "@/components/docs/demos";
import { cn } from "@/lib/utils";

export function LiveExample({
  name,
  caption,
}: {
  name: string;
  caption?: string;
}) {
  const demo = demos[name];
  const [showCode, setShowCode] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  if (!demo) {
    return (
      <div className="my-6 rounded-md border border-dashed border-border p-4 font-mono text-sm text-muted-foreground">
        Missing demo: {name}. Add it to components/docs/demos.tsx.
      </div>
    );
  }

  async function copy() {
    await navigator.clipboard.writeText(demo.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <figure className="my-6 overflow-hidden rounded-lg border border-border">
      <div className="flex min-h-[120px] items-center justify-center bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px] p-8">
        {demo.node}
      </div>

      <div className="flex items-center justify-between border-t border-border bg-muted/40 px-3 py-1.5">
        <button
          type="button"
          onClick={() => setShowCode((s) => !s)}
          aria-expanded={showCode}
          className="flex items-center gap-1.5 rounded px-1.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform",
              showCode && "rotate-180",
            )}
          />
          {showCode ? "Hide code" : "Show code"}
        </button>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 rounded px-1.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-success" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {showCode ? (
        <pre className="overflow-x-auto border-t border-border bg-[hsl(222_24%_7%)] p-4 text-[0.8125rem] leading-6 text-[hsl(210_16%_82%)]">
          <code className="font-mono">{demo.code}</code>
        </pre>
      ) : null}

      {caption ? (
        <figcaption className="border-t border-border px-3 py-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
