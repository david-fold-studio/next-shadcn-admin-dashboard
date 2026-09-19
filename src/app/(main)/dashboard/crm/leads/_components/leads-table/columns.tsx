"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import type { DataTableFeatures } from "@/lib/data-table-features";

import type { LeadRow } from "./schema";

const statusVariant: Record<LeadRow["status"], "default" | "secondary" | "outline" | "destructive"> = {
  New: "default",
  Contacted: "secondary",
  Quoted: "outline",
  Won: "secondary",
  Lost: "destructive",
};

export const leadsColumns: ColumnDef<DataTableFeatures, LeadRow>[] = [
  {
    accessorKey: "id",
    header: "Lead",
    cell: ({ row }) => <span className="font-medium tabular-nums">{row.original.id}</span>,
  },
  {
    accessorKey: "name",
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex flex-col gap-0.5">
        <span className="font-medium">{row.original.name}</span>
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
    accessorKey: "source",
    header: "Source",
    cell: ({ row }) => <Badge variant="outline">{row.original.source}</Badge>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <span className="text-sm tabular-nums">{row.original.phone}</span>,
  },
  {
    accessorKey: "estimatedValue",
    header: "Est. value",
    cell: ({ row }) => <span className="font-medium tabular-nums">{row.original.estimatedValue}</span>,
  },
  {
    accessorKey: "lastContact",
    header: "Last contact",
    cell: ({ row }) => <span className="text-muted-foreground text-sm">{row.original.lastContact}</span>,
  },
];
