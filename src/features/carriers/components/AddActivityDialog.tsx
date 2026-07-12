"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import AddActivityForm from "./AddActivityForm";

import { useState } from "react";

type Props = {
    carrierId: string;
};


export default function AddActivityDialog({
    carrierId,
}: Props) {

    const [open, setOpen] = useState(false);

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >

            <DialogTrigger
                render={
                    <Button>
                        + Add Activity
                    </Button>
                }
            />

            <DialogContent>

                <DialogHeader>

                    <DialogTitle>
                        Add Activity
                    </DialogTitle>

                </DialogHeader>

                <AddActivityForm
                    carrierId={carrierId}
                    onSuccess={() => setOpen(false)}
                />

            </DialogContent>

        </Dialog>
    );
}