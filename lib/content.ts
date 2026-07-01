import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type DocStatus = "stable" | "beta" | "deprecated" | "planned";

export interface DocFrontmatter {
  title: string;
  description: string;
  status: DocStatus;
  category?: string;
}

export interface DocEntry {
  slug: string;
  section: "components" | "foundations";
  frontmatter: DocFrontmatter;
  body: string;
}

function sectionDir(section: DocEntry["section"]) {
  return path.join(CONTENT_ROOT, section);
}

export function getDocSlugs(section: DocEntry["section"]): string[] {
  const dir = sectionDir(section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getDoc(
  section: DocEntry["section"],
  slug: string,
): DocEntry | null {
  const file = path.join(sectionDir(section), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    section,
    frontmatter: data as DocFrontmatter,
    body: content,
  };
}

export function getAllDocs(section: DocEntry["section"]): DocEntry[] {
  return getDocSlugs(section)
    .map((slug) => getDoc(section, slug))
    .filter((d): d is DocEntry => d !== null)
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
}
