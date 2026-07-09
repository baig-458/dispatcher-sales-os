"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

type Props<T extends FieldValues> = {
    id: Path<T>;
    label: string;
    register: UseFormRegister<T>;
    placeholder?: string;
};

export default function FormTextarea<T extends FieldValues>({
    id,
    label,
    register,
    placeholder,
}: Props<T>) {
    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>

            <Textarea
                id={id}
                placeholder={placeholder}
                {...register(id)}
            />
        </div>
    );
}