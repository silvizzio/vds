import type { ComponentType } from "react";
import {
  Overview,
  Usage,
  Code,
  Accessibility,
} from "@/components/docs/tabs";
import { LiveExample } from "@/components/docs/live-example";
import { PropsTable } from "@/components/docs/props-table";
import { DoDont, Do, Dont } from "@/components/docs/do-dont";
import { Anatomy } from "@/components/docs/anatomy";

/*
  Everything here is available inside content/*.mdx with no imports.
  Content authors compose pages from these blocks; layout stays in code.
*/
export const mdxComponents: Record<string, ComponentType<any>> = {
  Overview,
  Usage,
  Code,
  Accessibility,
  LiveExample,
  PropsTable,
  DoDont,
  Do,
  Dont,
  Anatomy,
};
