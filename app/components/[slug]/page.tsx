import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getDoc, getDocSlugs } from "@/lib/content";
import { ComponentHeader } from "@/components/docs/component-header";
import { Tabs } from "@/components/docs/tabs";
import { mdxComponents } from "@/components/docs/mdx-components";

export function generateStaticParams() {
  return getDocSlugs("components").map((slug) => ({ slug }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoc("components", slug);
  if (!doc) notFound();

  return (
    <article>
      <ComponentHeader
        title={doc.frontmatter.title}
        description={doc.frontmatter.description}
        status={doc.frontmatter.status}
        category={doc.frontmatter.category}
      />
      <Tabs>
        <MDXRemote
          source={doc.body}
          components={mdxComponents}
          options={{ blockJS: false }}
        />
      </Tabs>
    </article>
  );
}
