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
}

const CInput = ({ type = "text", placeHolder, label, name }: ICInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      defaultValue={""}
      control={control}
      name={name}
      render={({ field }) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor={name}>{label}</Label>
          <Input {...field} type={type} placeholder={placeHolder} />
        </div>
      )}
    />
  );
};

export default CInput;
