"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Option = {
    label: string;
    value: string;
};

type Props<T extends FieldValues> = {
    id: Path<T>;
    label: string;
    placeholder: string;
    options: Option[];
    control: Control<T>;
};

export default function FormSelect<T extends FieldValues>({
    id,
    label,
    placeholder,
    options,
    control,
}: Props<T>) {
    return (
        <div className="space-y-2">
            <Label>{label}</Label>

            <Controller
                control={control}
                name={id}
                render={({ field }) => (
                    <Select
                        value={field.value ?? ""}
                        onValueChange={field.onChange}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>

                        <SelectContent>
                            {options.map((option) => (
                                <SelectItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            />
        </div>
    );
}