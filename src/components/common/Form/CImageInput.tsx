/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";

const CImageInput = ({ required = false }: { required?: boolean }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  // State to hold the image preview URL
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <div>
      {imagePreview && (
        <div className="mt-2 flex justify-center mb-2">
          <img
            src={imagePreview}
            alt="Selected preview"
            className=" w-96 h-auto rounded-md"
          />
        </div>
      )}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="photo">Photo</Label>
        <Controller
          name="photo"
          rules={{ required: required }}
          control={control}
          render={({ field }) => (
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  // Create a preview URL for the selected image
                  const previewUrl = URL.createObjectURL(selectedFile);
                  setImagePreview(previewUrl);
                }
                field.onChange(selectedFile);
                setValue("photo", selectedFile, {
                  shouldValidate: true,
                });
              }}
            />
          )}
        />
        {/* Show error message if photo field is required and not provided */}
        {errors.photo && (
          <p className="text-red-500 mt-1">This field is required.</p>
        )}
      </div>
      {/* Preview the selected image if it exists */}
    </div>
  );
};

export default CImageInput;
