import Link from "next/link";

import { Plus } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

import { EstimatesSection } from "./_components/estimates-section";

export const metadata: Metadata = {
  title: "Estimates — Swish",
  description: "Create and track job estimates for Swish window washing and exterior cleaning.",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-3xl leading-none tracking-tight">Estimates</h1>
          <p className="text-muted-foreground text-sm">
            Build quotes for window washing, pressure washing, and other exterior cleaning jobs.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/crm/estimates/new" prefetch={false}>
            <Plus data-icon="inline-start" />
            New estimate
          </Link>
        </Button>
      </div>
      <EstimatesSection />
    </div>
  );
}
