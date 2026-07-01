import Link from "next/link";
import { getAllDocs } from "@/lib/content";
import { StatusPill } from "@/components/docs/status-pill";

export default function HomePage() {
  const components = getAllDocs("components");

  return (
    <div>
      <section className="mb-12 max-w-2xl">
        <p className="vz-label mb-3">Vizzio / Design System</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          One system for every Vizzio surface
        </h1>
        <p className="mt-4 text-[0.9375rem] leading-7 text-muted-foreground">
          Components, foundations, and usage guidance for command centre and
          digital twin products. Built on Next.js, Tailwind, and shadcn/ui,
          tuned to Vizzio's needs. Each component page pairs live examples with
          the source and props so design and engineering read from the same
          reference.
        </p>
      </section>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="vz-label">Components</h2>
        <span className="font-mono text-xs text-muted-foreground">
          {components.length} documented
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((doc) => (
          <Link
            key={doc.slug}
            href={`/components/${doc.slug}`}
            className="group rounded-lg border border-border p-4 transition-colors hover:border-vz-accent/50 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-foreground group-hover:text-foreground">
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
