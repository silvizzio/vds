"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TabKey = "overview" | "usage" | "code" | "accessibility";

const TAB_ORDER: { key: TabKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "usage", label: "Usage" },
  { key: "code", label: "Code" },
  { key: "accessibility", label: "Accessibility" },
];

const TabContext = React.createContext<TabKey>("overview");

export function Tabs({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState<TabKey>("overview");

  return (
    <div>
      <div
        role="tablist"
        aria-label="Component documentation sections"
        className="mb-8 flex gap-1 border-b border-border"
      >
        {TAB_ORDER.map((t) => {
          const selected = active === t.key;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(t.key)}
              className={cn(
                "-mb-px border-b-2 px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selected
                  ? "border-vz-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <TabContext.Provider value={active}>{children}</TabContext.Provider>
    </div>
  );
}

/*
  MDX authors wrap each section in one of these. Only the active panel renders.
  Named exports Overview/Usage/Code/Accessibility map cleanly in mdx-components.
*/
function Panel({
  tab,
  children,
}: {
  tab: TabKey;
  children: React.ReactNode;
}) {
  const active = React.useContext(TabContext);
  if (active !== tab) return null;
  return (
    <section role="tabpanel" className="vz-prose max-w-3xl">
      {children}
    </section>
  );
}

export const Overview = ({ children }: { children: React.ReactNode }) => (
  <Panel tab="overview">{children}</Panel>
);
export const Usage = ({ children }: { children: React.ReactNode }) => (
  <Panel tab="usage">{children}</Panel>
);
export const Code = ({ children }: { children: React.ReactNode }) => (
  <Panel tab="code">{children}</Panel>
);
export const Accessibility = ({ children }: { children: React.ReactNode }) => (
  <Panel tab="accessibility">{children}</Panel>
);
