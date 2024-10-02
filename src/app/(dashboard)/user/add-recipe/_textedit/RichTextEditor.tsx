"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CTextEditor from "@/components/common/Form/CTextEditor";
import { useCreateRecipe } from "@/hooks/recipe.hook";

import { FieldValues } from "react-hook-form";

const RichTextEditor = () => {
  const { mutate: createRecipe, data } = useCreateRecipe();

  const onSubmit = async (data: FieldValues) => {
    createRecipe({ recipe: data.recipe });
  };

  return (
    <div>
      <CForm onFormSubmit={onSubmit}>
        <CTextEditor name="recipe" label="Recipe"></CTextEditor>
        <CButton text="Add Recipe"></CButton>
      </CForm>
    </div>
  );
};

export default RichTextEditor;
