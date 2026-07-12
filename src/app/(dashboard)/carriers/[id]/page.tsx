import { notFound } from "next/navigation";

import { getCarrier } from "@/features/carriers/queries/get-carrier";
import CarrierStatusBadge from "@/features/carriers/components/CarrierStatusBadge";
import InfoRow from "@/features/carriers/components/InfoRow";
import { getCarrierActivities } from "@/features/carriers/queries/get-carrier-activities";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import AddActivityDialog from "@/features/carriers/components/AddActivityDialog";
import ActivityNote from "@/features/carriers/components/ActivityNote";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function CarrierDetailsPage({
    params,
}: Props) {
    const { id } = await params;

    const carrier = await getCarrier(id);
    const activities =
        await getCarrierActivities(id);

    if (!carrier) {
        notFound();
    }

    return (
        <div className="space-y-6">

            <div>
                <div className="flex items-center justify-between">

                    <div>

                        <h1 className="text-3xl font-bold">
                            {carrier.companyName}
                        </h1>

                        <p className="text-muted-foreground">
                            Carrier Profile
                        </p>

                    </div>

                    <AddActivityDialog
                        carrierId={carrier.id}
                    />

                </div>

                <div className="mt-2">
                    <CarrierStatusBadge
                        status={carrier.status}
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <div className="rounded-lg border p-6">

                        <h2 className="mb-4 text-lg font-semibold">
                            Company Information
                        </h2>

                        <div className="space-y-3">

                            <InfoRow label="Owner" value={carrier.ownerName} />
                            <InfoRow label="MC Number" value={carrier.mcNumber} />
                            <InfoRow label="DOT Number" value={carrier.dotNumber} />
                            <InfoRow label="Equipment" value={carrier.equipment} />

                        </div>

                    </div>

                    <div className="rounded-lg border p-6">

                        <h2 className="mb-4 text-lg font-semibold">
                            Contact
                        </h2>

                        <div className="space-y-3">

                            <InfoRow label="Phone" value={carrier.phone} />
                            <InfoRow label="Email" value={carrier.email} />
                            <InfoRow label="Preferred Lanes" value={carrier.preferredLanes} />
                        </div>

                    </div>

                </div>

                <Card className="mt-6">

                    <CardHeader>

                        <CardTitle>
                            Activity Timeline
                        </CardTitle>

                    </CardHeader>

                    <CardContent>

                        {activities.length === 0 ? (

                            <p className="text-muted-foreground">
                                No activity yet.
                            </p>

                        ) : (

                            <div className="space-y-4">

                                {activities.map((activity) => (

                                    <div
                                        key={activity.id}
                                        className="border-l-2 pl-4"
                                    >

                                        <p className="font-medium">
                                            {activity.title}
                                        </p>

                                        {activity.note && (

                                            <ActivityNote note={activity.note} />
                                        )}

                                        <p className="text-xs text-muted-foreground">

                                            {activity.createdAt.toLocaleString()}

                                        </p>

                                    </div>

                                ))}

                            </div>

                        )}

                    </CardContent>

                </Card>

            </div>

        </div>
    );
}