import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export async function Intro() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <p className="font-medium text-muted-foreground text-sm tracking-tight">Windows CRM</p>
        <h1 className="text-balance font-medium text-2xl leading-snug tracking-tight sm:text-3xl" id="hero-title">
          Keep every customer relationship in one clear place.
        </h1>
        <p className="text-muted-foreground text-sm leading-6 sm:text-base">
          Track deals, follow up on tasks, and see your pipeline without jumping between tools.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <Button asChild>
          <Link href="/dashboard/crm" prefetch={false}>
            Open Windows CRM
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/dashboard/default" prefetch={false}>
            View customers
          </Link>
        </Button>
      </div>
    </div>
  );
}
