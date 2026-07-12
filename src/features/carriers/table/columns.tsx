"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Carrier } from "@prisma/client";
import CarrierStatusBadge from "../components/CarrierStatusBadge";
import CarrierActions from "../components/CarrierActions";

export const columns: ColumnDef<Carrier>[] = [
    {
        accessorKey: "companyName",
        header: "Company",
    },
    {
        accessorKey: "mcNumber",
        header: "MC Number",
    },
    {
        accessorKey: "equipment",
        header: "Equipment",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <CarrierStatusBadge
                status={row.original.status}
            />
        ),
    },
    {
        id: "actions",

        header: "Actions",

        cell: ({ row }) => (
            <CarrierActions
                carrierId={row.original.id}
            />
        ),
    },
];