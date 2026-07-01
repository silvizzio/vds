import Link from "next/link";
import { Logo } from "@/components/docs/logo";
import { ThemeToggle } from "@/components/docs/theme-toggle";

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background/80 px-5 backdrop-blur">
      <Link href="/" className="focus-visible:outline-none">
        <Logo />
      </Link>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground sm:flex">
          <span>Search components</span>
          <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[0.625rem]">
            /
          </kbd>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
