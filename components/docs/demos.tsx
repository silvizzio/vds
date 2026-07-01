"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export interface Demo {
  node: React.ReactNode;
  code: string;
}

/*
  Live example registry. Each key is referenced from MDX via
  <LiveExample name="..." />. Keep the rendered node and the code string in
  sync by hand so the preview always matches the copyable source.
*/

function ModalDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete twin snapshot"
        description="This removes the snapshot from the active scene. This cannot be undone."
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}

export const demos: Record<string, Demo> = {
  "button-variants": {
    node: (
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    ),
    code: `<div className="flex flex-wrap gap-3">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
</div>`,
  },
  "button-sizes": {
    node: (
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    ),
    code: `<div className="flex items-center gap-3">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`,
  },
  "button-disabled": {
    node: (
      <div className="flex gap-3">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </div>
    ),
    code: `<Button disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled</Button>`,
  },
  "modal-basic": {
    node: <ModalDemo />,
    code: `const [open, setOpen] = React.useState(false);

return (
  <>
    <Button onClick={() => setOpen(true)}>Open dialog</Button>
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Delete twin snapshot"
      description="This removes the snapshot from the active scene. This cannot be undone."
      footer={
        <>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
        </>
      }
    />
  </>
);`,
  },
};
