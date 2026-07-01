export interface NavItem {
  title: string;
  slug: string;
  status?: "stable" | "beta" | "deprecated" | "planned";
}

export interface NavGroup {
  label: string;
  base: string;
  items: NavItem[];
}

/*
  Left rail information architecture, Carbon-style grouping.
  Add a component here and create the matching content/components/<slug>.mdx file.
*/
export const navigation: NavGroup[] = [
  {
    label: "Foundations",
    base: "/foundations",
    items: [
      { title: "Color", slug: "color", status: "stable" },
      { title: "Typography", slug: "typography", status: "stable" },
      { title: "Spacing", slug: "spacing", status: "stable" },
      { title: "Elevation", slug: "elevation", status: "beta" },
      { title: "Motion", slug: "motion", status: "planned" },
    ],
  },
  {
    label: "Actions",
    base: "/components",
    items: [
      { title: "Button", slug: "button", status: "stable" },
      { title: "Icon Button", slug: "icon-button", status: "planned" },
    ],
  },
  {
    label: "Inputs",
    base: "/components",
    items: [
      { title: "Input", slug: "input", status: "planned" },
      { title: "Select", slug: "select", status: "planned" },
      { title: "Checkbox", slug: "checkbox", status: "planned" },
    ],
  },
  {
    label: "Overlays",
    base: "/components",
    items: [
      { title: "Modal", slug: "modal", status: "stable" },
      { title: "Tooltip", slug: "tooltip", status: "planned" },
      { title: "Toast", slug: "toast", status: "planned" },
    ],
  },
  {
    label: "Data Display",
    base: "/components",
    items: [
      { title: "Card", slug: "card", status: "planned" },
      { title: "Badge", slug: "badge", status: "planned" },
      { title: "Table", slug: "table", status: "planned" },
    ],
  },
];
