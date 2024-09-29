import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext, Controller } from "react-hook-form";

const CImageInput = () => {
  const { control, setValue } = useFormContext();

  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="photo">Photo</Label>
        <Controller
          name="photo"
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
      </div>
    </div>
  );
};

export default CImageInput;
