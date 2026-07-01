import { cn } from "@/lib/utils";

/*
  Placeholder Vizzio wordmark as inline SVG. Replace the <svg> body with the
  official Vizzio logo SVG. Keep it inline so it inherits currentColor and
  re-themes with light/dark automatically.
*/
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="17"
          height="17"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6 6.5L10 13.5L14 6.5"
          stroke="hsl(var(--vz-accent))"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-semibold tracking-tight text-foreground">
        Vizzio
      </span>
      <span className="vz-label mt-0.5">Design System</span>
    </span>
  );
}
