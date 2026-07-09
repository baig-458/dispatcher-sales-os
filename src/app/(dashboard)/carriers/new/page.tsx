import CarrierForm from "@/features/carriers/components/CarrierForm";

export default function NewCarrierPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Add New Carrier</h1>

      <p className="mt-2 text-muted-foreground">
        Let's add your first carrier.
      </p>

      <CarrierForm />
    </div>
  );
}