import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="vz-label mb-3">404</p>
      <h1 className="mb-2 text-2xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mb-6 text-muted-foreground">
        This entry does not exist yet, or the content file is missing.
      </p>
      <Link
        href="/"
        className="text-vz-accent underline underline-offset-4"
      >
        Back to the design system
      </Link>
    </div>
  );
}
