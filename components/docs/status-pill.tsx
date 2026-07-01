import { cn } from "@/lib/utils";

type Status = "stable" | "beta" | "deprecated" | "planned";

const styles: Record<Status, string> = {
  stable: "border-success/30 bg-success/10 text-success",
  beta: "border-vz-accent/30 bg-vz-accent/10 text-vz-accent",
  deprecated: "border-destructive/30 bg-destructive/10 text-destructive",
  planned: "border-border bg-muted text-muted-foreground",
};

export function StatusPill({
  status,
  className,
}: {
  status: Status;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.12em]",
        styles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
