import { StatusPill } from "@/components/docs/status-pill";
import type { DocStatus } from "@/lib/content";

export function ComponentHeader({
  title,
  description,
  status,
  category,
}: {
  title: string;
  description: string;
  status: DocStatus;
  category?: string;
}) {
  return (
    <div className="mb-8">
      {category ? <p className="vz-label mb-2">{category}</p> : null}
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <StatusPill status={status} />
      </div>
      <p className="mt-2 max-w-2xl text-[0.9375rem] leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
