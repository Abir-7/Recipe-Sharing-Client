"use client";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ICInput {
  type?: string;
  placeHolder?: string;
  label: string;
  name: string;
  required?: boolean;
}

const CInput = ({
  type = "text",
  placeHolder,
  label,
  name,
  required = false,
}: ICInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      defaultValue={""}
      control={control}
      name={name}
      rules={{ required: required }}
      render={({ field }) => (
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor={name}>{label}</Label>
          <Input
            className="w-full"
            {...field}
            type={type}
            placeholder={placeHolder}
          />
          {errors[name] && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
      )}
    />
  );
};

export default CInput;
