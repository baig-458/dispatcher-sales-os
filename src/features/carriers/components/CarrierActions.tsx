"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
    carrierId: string;
};

export default function CarrierActions({
    carrierId,
}: Props) {
    return (
        <div className="flex items-center gap-2">

            <Link href={`/carriers/${carrierId}`}>
                <Button
                    size="icon"
                    variant="ghost"
                >
                    <Eye className="h-4 w-4" />
                </Button>
            </Link>

            <Link href={`/carriers/${carrierId}/edit`}>
                <Button
                    size="icon"
                    variant="ghost"
                >
                    <Pencil className="h-4 w-4" />
                </Button>
            </Link>

            <Button
                size="icon"
                variant="ghost"
            >
                <Trash2 className="h-4 w-4 text-red-500" />
            </Button>

        </div>
    );
}