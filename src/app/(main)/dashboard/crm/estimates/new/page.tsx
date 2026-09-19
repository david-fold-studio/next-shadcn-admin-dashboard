import Link from "next/link";

import { ArrowLeft, Save, Send } from "lucide-react";
import type { Metadata } from "next";

import { defaultEstimateValues } from "@/app/(main)/dashboard/invoice/_components/data";
import { Invoice } from "@/app/(main)/dashboard/invoice/_components/invoice";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "New estimate — Swish",
  description: "Create a job estimate for Swish window washing and exterior cleaning.",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3">
          <Button asChild variant="ghost" size="sm" className="w-fit px-0">
            <Link href="/dashboard/crm/estimates" prefetch={false}>
              <ArrowLeft data-icon="inline-start" />
              Back to estimates
            </Link>
          </Button>
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-3xl leading-none tracking-tight">New estimate</h1>
            <p className="text-muted-foreground text-sm">
              Price the job, preview the quote, and send it to your customer.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="button" variant="outline">
            <Save data-icon="inline-start" />
            Save draft
          </Button>
          <Button type="button">
            <Send data-icon="inline-start" />
            Send estimate
          </Button>
        </div>
      </div>

      <Invoice defaultValues={defaultEstimateValues} />
    </div>
  );
}
