"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

export default function FormInput<T extends FieldValues>({
  id,
  label,
  register,
  type = "text",
  placeholder,
  required = false,
}: FormInputProps<T>) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </Label>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
      />
    </div>
  );
}