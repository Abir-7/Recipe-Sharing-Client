/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext, Controller } from "react-hook-form";

const CImageInput = ({ required = false }: { required?: boolean }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="photo">Photo</Label>
        <Controller
          name="photo"
          rules={{ required: required }}
          control={control}
          render={({ field }) => (
            <Input
              type="file"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
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
          <p className="text-red-500  mt-1">This field is required.</p>
        )}
      </div>
    </div>
  );
};

export default CImageInput;
