"use client";

import dynamic from "next/dynamic";

import { Controller, useFormContext } from "react-hook-form";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface RichtextEditorProps {
  name: string;
  label: string;
}

const CTextEditor: React.FC<RichtextEditorProps> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <JoditEditor {...field} />}
      />
    </div>
  );
};

export default CTextEditor;
