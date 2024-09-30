import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

const CTextArea = ({
  label,
  name,
  required = false,
  placeholder,
}: {
  required?: boolean;
  label: string;
  name: string;
  placeholder?: string;
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <div className="grid w-full  items-center gap-1.5">
        <Label htmlFor="photo">{label}</Label>

        <Textarea {...register(name, { required })} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default CTextArea;
