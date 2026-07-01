export interface AnatomyPart {
  label: string;
  description: string;
}

export function Anatomy({
  parts,
  children,
}: {
  parts: AnatomyPart[];
  children?: React.ReactNode;
}) {
  return (
    <div className="my-6 grid gap-6 rounded-lg border border-border p-6 md:grid-cols-2">
      <div className="flex items-center justify-center rounded-md bg-muted/40 p-6">
        {children ?? (
          <span className="font-mono text-xs text-muted-foreground">
            Drop the annotated component preview here
          </span>
        )}
      </div>
      <ol className="space-y-3">
        {parts.map((part, i) => (
          <li key={part.label} className="flex gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-vz-accent/40 bg-vz-accent/10 font-mono text-[0.625rem] text-vz-accent">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                {part.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {part.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
