import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SupportCard() {
  return (
    <Card size="sm" className="overflow-hidden shadow-none group-data-[collapsible=icon]:hidden">
      <CardHeader className="min-w-0 px-4">
        <CardTitle className="truncate text-sm">Running Swish</CardTitle>
        <CardDescription className="line-clamp-3">
          Check the{" "}
          <Link href="/dashboard/crm" prefetch={false} className="text-foreground hover:underline">
            pipeline
          </Link>{" "}
          for open quotes and jobs, then use customers or calendar for the day’s route.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
