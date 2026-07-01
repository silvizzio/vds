import Link from "next/link";
import { getAllDocs } from "@/lib/content";
import { StatusPill } from "@/components/docs/status-pill";

export default function ComponentsIndex() {
  const components = getAllDocs("components");

  return (
    <div>
      <p className="vz-label mb-2">Vizzio / Components</p>
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-foreground">
        Components
      </h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((doc) => (
          <Link
            key={doc.slug}
            href={`/components/${doc.slug}`}
            className="group rounded-lg border border-border p-4 transition-colors hover:border-vz-accent/50 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-foreground">
                {doc.frontmatter.title}
              </span>
              <StatusPill status={doc.frontmatter.status} />
            </div>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {doc.frontmatter.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
