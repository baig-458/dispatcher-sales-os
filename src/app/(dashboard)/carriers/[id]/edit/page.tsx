import { notFound } from "next/navigation";

import CarrierForm from "@/features/carriers/components/CarrierForm";
import { getCarrier } from "@/features/carriers/queries/get-carrier";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditCarrierPage({
    params,
}: Props) {
    const { id } = await params;

    const carrier = await getCarrier(id);

    if (!carrier) {
        notFound();
    }

    return (
        <div className="space-y-6">

            <div>
                <h1 className="text-3xl font-bold">
                    Edit Carrier
                </h1>

                <p className="text-muted-foreground">
                    Update carrier information.
                </p>
            </div>

            <CarrierForm
                carrierId={carrier.id}
                defaultValues={{
                    companyName: carrier.companyName,
                    ownerName: carrier.ownerName ?? "",
                    mcNumber: carrier.mcNumber,
                    dotNumber: carrier.dotNumber ?? "",
                    phone: carrier.phone,
                    email: carrier.email ?? "",
                    equipment: carrier.equipment,
                    preferredLanes: carrier.preferredLanes ?? "",
                    notes: carrier.notes ?? "",
                }}
            />

        </div>
    );
}