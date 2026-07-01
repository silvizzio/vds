import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getDoc, getDocSlugs } from "@/lib/content";
import { ComponentHeader } from "@/components/docs/component-header";
import { mdxComponents } from "@/components/docs/mdx-components";

export function generateStaticParams() {
  return getDocSlugs("foundations").map((slug) => ({ slug }));
}

export default async function FoundationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoc("foundations", slug);
  if (!doc) notFound();

  return (
    <article>
      <ComponentHeader
        title={doc.frontmatter.title}
        description={doc.frontmatter.description}
        status={doc.frontmatter.status}
        category={doc.frontmatter.category ?? "Foundations"}
      />
      <div className="vz-prose max-w-3xl">
        <MDXRemote source={doc.body} components={mdxComponents} />
      </div>
    </article>
  );
}
