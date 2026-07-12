"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    carrierActivitySchema,
    type CarrierActivitySchema,
} from "../schemas/carrier-activity.schema";

import { createCarrierActivity }
from "../actions/create-carrier-activity";

import FormInput
from "@/components/forms/FormInput";

import FormTextarea
from "@/components/forms/FormTextarea";

import { Button }
from "@/components/ui/button";

import { toast }
from "sonner";

type Props = {
    carrierId: string;
    onSuccess: () => void;
};

export default function AddActivityForm({
    carrierId,
    onSuccess,
}: Props) {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<CarrierActivitySchema>({
        resolver: zodResolver(
            carrierActivitySchema
        ),

        defaultValues: {
            carrierId,
        },
    });

    async function onSubmit(
        data: CarrierActivitySchema
    ) {

        const result =
            await createCarrierActivity(data);

        if (!result.success) {

            toast.error(
                "Failed to add activity."
            );

            return;
        }

        toast.success(
            "Activity added."
        );

        onSuccess();

        reset({
            carrierId,
            title: "",
            note: "",
        });
    }

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
        >

            <FormInput
                id="title"
                label="Title"
                register={register}
            />

            <FormTextarea
                id="note"
                label="Notes"
                register={register}
            />

            <Button
                className="w-full"
                type="submit"
            >
                Save Activity
            </Button>

        </form>

    );
}