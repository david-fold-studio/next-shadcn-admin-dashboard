"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import type { DataTableFeatures } from "@/lib/data-table-features";

import type { EstimateRow } from "./schema";

const statusVariant: Record<EstimateRow["status"], "default" | "secondary" | "outline" | "destructive"> = {
  Draft: "secondary",
  Sent: "outline",
  Accepted: "default",
  Declined: "destructive",
  Expired: "secondary",
};

export const estimatesColumns: ColumnDef<DataTableFeatures, EstimateRow>[] = [
  {
    accessorKey: "id",
    header: "Estimate",
    cell: ({ row }) => <span className="font-medium tabular-nums">{row.original.id}</span>,
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex flex-col gap-0.5">
        <span className="font-medium">{row.original.customer}</span>
        <span className="text-muted-foreground text-xs">{row.original.address}</span>
      </div>
    ),
  },
  {
    accessorKey: "service",
    header: "Service",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Badge variant={statusVariant[row.original.status]}>{row.original.status}</Badge>,
    filterFn: "equalsString",
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => <span className="font-medium tabular-nums">{row.original.total}</span>,
  },
  {
    accessorKey: "validUntil",
    header: "Valid until",
    cell: ({ row }) => <span className="text-muted-foreground text-sm">{row.original.validUntil}</span>,
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => <span className="text-muted-foreground text-sm">{row.original.createdAt}</span>,
  },
];
