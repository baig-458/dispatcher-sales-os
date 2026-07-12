type Props = {
    note: string;
};

export default function ActivityNote({
    note,
}: Props) {

    const lines = note.split("\n");

    return (
        <div className="space-y-2">

            {lines.map((line, index) => (

                <div
                    key={index}
                    className="rounded-md bg-muted p-2 text-sm"
                >
                    {line}
                </div>

            ))}

        </div>
    );
}