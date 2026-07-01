export interface PropRow {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            <th className="vz-label px-3 py-2 font-normal">Prop</th>
            <th className="vz-label px-3 py-2 font-normal">Type</th>
            <th className="vz-label px-3 py-2 font-normal">Default</th>
            <th className="vz-label px-3 py-2 font-normal">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-border last:border-0">
              <td className="whitespace-nowrap px-3 py-2.5 align-top">
                <span className="font-mono text-[0.8125rem] text-foreground">
                  {r.name}
                </span>
                {r.required ? (
                  <span className="ml-1 text-destructive" title="Required">
                    *
                  </span>
                ) : null}
              </td>
              <td className="px-3 py-2.5 align-top">
                <span className="font-mono text-[0.8125rem] text-vz-accent">
                  {r.type}
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 align-top">
                <span className="font-mono text-[0.8125rem] text-muted-foreground">
                  {r.default ?? "—"}
                </span>
              </td>
              <td className="px-3 py-2.5 align-top text-muted-foreground">
                {r.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
