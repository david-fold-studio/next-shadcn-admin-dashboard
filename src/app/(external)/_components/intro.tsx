import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export async function Intro() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <p className="font-medium text-muted-foreground text-sm tracking-tight">Swish</p>
        <h1 className="text-balance font-medium text-2xl leading-snug tracking-tight sm:text-3xl" id="hero-title">
          The workspace for window washing and exterior cleaning teams.
        </h1>
        <p className="text-muted-foreground text-sm leading-6 sm:text-base">
          Track quotes, schedule jobs, and keep every customer follow-up clear — from first inquiry to a sparkling
          finish.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <Button asChild>
          <Link href="/dashboard/crm" prefetch={false}>
            Open Swish
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
