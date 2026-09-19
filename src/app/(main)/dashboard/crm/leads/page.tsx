import type { Metadata } from "next";

import { LeadsSection } from "./_components/leads-section";

export const metadata: Metadata = {
  title: "Leads — Swish",
  description: "Track potential window washing and exterior cleaning customers for Swish.",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-medium text-3xl leading-none tracking-tight">Leads</h1>
        <p className="text-muted-foreground text-sm">
          New inquiries and potential jobs for window washing and exterior cleaning.
        </p>
      </div>
      <LeadsSection />
    </div>
  );
}
