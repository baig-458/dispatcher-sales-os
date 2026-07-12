import { getCarriers } from "@/features/carriers/queries/get-carriers";
import { DataTable } from "@/components/data-table/DataTable";
import { columns } from "@/features/carriers/table/columns";

export default async function CarriersPage() {
    const carriers = await getCarriers();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    Carriers
                </h1>

                <p className="text-muted-foreground">
                    Manage your carrier network.
                </p>
            </div>

            <DataTable
                columns={columns}
                data={carriers}
            />
        </div>
    );
}