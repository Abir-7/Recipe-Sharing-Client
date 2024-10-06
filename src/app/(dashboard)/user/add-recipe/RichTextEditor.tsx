"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CImageInput from "@/components/common/Form/CImageInput";
import CInput from "@/components/common/Form/CInput";
import CTextEditor from "@/components/common/Form/CTextEditor";
import { useCreateRecipe } from "@/hooks/recipe.hook";
import { uploadImageToCloudinary } from "@/utils/uplaodImage";
import { useEffect } from "react";

import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const RichTextEditor = () => {
  const { mutate: createRecipe, isPending, error } = useCreateRecipe();

  const onSubmit = async (data: FieldValues) => {
    const photourl = await uploadImageToCloudinary(data.photo);

    createRecipe({ ...data, photo: photourl });
  };
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);
  return (
    <div className="container mx-auto p-2 mt-6">
      <CForm onFormSubmit={onSubmit}>
        <div className="grid gap-2">
          <CImageInput required={true}></CImageInput>
          <CInput required={true} label="Title" name="title"></CInput>
          <CInput required={true} label="Category" name="category"></CInput>
          <CTextEditor label="Recipe Content" name="recipe"></CTextEditor>
          <CButton isPending={isPending} text="Add Recipe"></CButton>
        </div>
      </CForm>
    </div>
  );
};

export default RichTextEditor;
