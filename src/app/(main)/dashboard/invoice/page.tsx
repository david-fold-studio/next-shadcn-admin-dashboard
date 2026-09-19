import { Save, Send } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

import { Invoice } from "./_components/invoice";

export const metadata: Metadata = {
  title: "Invoices — Swish",
  description: "Create and send invoices for Swish window washing and exterior cleaning jobs.",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-3xl leading-none tracking-tight">Create invoice</h1>
          <p className="text-muted-foreground text-sm">
            Bill customers for completed window washing and exterior cleaning jobs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="button" variant="outline">
            <Save data-icon="inline-start" />
            Save as Draft
          </Button>
          <Button type="button">
            <Send data-icon="inline-start" />
            Send Invoice
          </Button>
        </div>
      </div>

      <Invoice />
    </div>
  );
}
