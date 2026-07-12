type Props = {
    label: string;
    value?: string | null;
};

export default function InfoRow({
    label,
    value,
}: Props) {
    return (
        <div className="flex justify-between border-b py-3">

            <span className="font-medium text-muted-foreground">
                {label}
            </span>

            <span>
                {value || "-"}
            </span>

        </div>
    );
}