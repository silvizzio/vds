import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function DoDont({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">{children}</div>
  );
}

function Card({
  kind,
  children,
}: {
  kind: "do" | "dont";
  children: React.ReactNode;
}) {
  const isDo = kind === "do";
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div
        className={cn(
          "h-1",
          isDo ? "bg-success" : "bg-destructive",
        )}
      />
      <div className="p-4">
        <div
          className={cn(
            "mb-2 flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em]",
            isDo ? "text-success" : "text-destructive",
          )}
        >
          {isDo ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
          {isDo ? "Do" : "Don't"}
        </div>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

export const Do = ({ children }: { children: React.ReactNode }) => (
  <Card kind="do">{children}</Card>
);
export const Dont = ({ children }: { children: React.ReactNode }) => (
  <Card kind="dont">{children}</Card>
);
