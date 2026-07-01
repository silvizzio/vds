"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Documentation"
      className="hidden w-60 shrink-0 overflow-y-auto border-r border-border px-3 py-6 md:block"
    >
      {navigation.map((group) => (
        <div key={group.label} className="mb-6">
          <p className="vz-label mb-2 px-2">{group.label}</p>
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const href = `${group.base}/${item.slug}`;
              const active = pathname === href;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors",
                      active
                        ? "bg-secondary font-medium text-foreground"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                    )}
                  >
                    <span>{item.title}</span>
                    {item.status === "planned" ? (
                      <span className="font-mono text-[0.5625rem] uppercase tracking-wider text-muted-foreground/60">
                        soon
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
