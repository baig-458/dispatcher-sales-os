"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormInput from "@/components/forms/FormInput";
import FormSelect from "@/components/forms/FormSelect";
import { equipmentOptions } from "@/lib/constants/equipment";
import FormTextarea from "@/components/forms/FormTextarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    carrierSchema,
    CarrierSchema,
} from "../schemas/carrier.schema";


export default function CarrierForm() {

    const {
        register,
        handleSubmit,
        control,
    } = useForm<CarrierSchema>({
        resolver: zodResolver(carrierSchema),
    });

    const onSubmit = async (data: CarrierSchema) => {
        console.log(data);
    };

    return (


        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <Card>
                <CardHeader>
                    <CardTitle>Company Information</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">

                        <FormInput
                            id="companyName"
                            label="Company Name"
                            placeholder="ABC Logistics"
                            required
                            register={register}
                        />

                        <FormInput
                            id="ownerName"
                            label="Owner Name"
                            placeholder="John Smith"
                            register={register}
                        />

                        <FormInput
                            id="phone"
                            label="Phone"
                            placeholder="+1 (555) 555-5555"
                            required
                            register={register}
                        />

                        <FormInput
                            id="email"
                            label="Email"
                            type="email"
                            placeholder="owner@company.com"
                            register={register}
                        />

                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Carrier Details</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">

                        <FormInput
                            id="mcNumber"
                            label="MC Number"
                            required
                            register={register}
                        />

                        <FormInput
                            id="dotNumber"
                            label="DOT Number"
                            register={register}
                        />

                        <FormSelect
                            id="equipment"
                            label="Equipment"
                            placeholder="Select equipment"
                            options={equipmentOptions}
                            control={control}
                        />

                        <FormInput
                            id="preferredLanes"
                            label="Preferred Lanes"
                            placeholder="TX → GA"
                            register={register}
                        />

                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Additional Notes</CardTitle>
                </CardHeader>

                <CardContent>
                    <FormTextarea
                        id="notes"
                        label="Notes"
                        placeholder="Add notes about the carrier..."
                        register={register}
                    />
                </CardContent>
            </Card>
            <div className="flex justify-end">

                <Button type="submit">
                    Save Carrier
                </Button>

            </div>

        </form>


    );
}