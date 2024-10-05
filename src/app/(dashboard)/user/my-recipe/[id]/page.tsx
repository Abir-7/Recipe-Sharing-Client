"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CImageInput from "@/components/common/Form/CImageInput";
import CInput from "@/components/common/Form/CInput";
import CTextEditor from "@/components/common/Form/CTextEditor";
import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";

import { useGetRecipeDetails, useUpdateRecipe } from "@/hooks/recipe.hook";

import React from "react";
import { FieldValues } from "react-hook-form";

const UpdateRecipe = ({ params }: { params: { id: string } }) => {
  const { data } = useGetRecipeDetails(params?.id);
  console.log(params.id);
  const filterEmptyValues = (data: FieldValues) => {
    return Object.fromEntries(
      Object.entries(data).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, value]) =>
          value !== null &&
          value !== undefined &&
          value !== "" &&
          !(typeof value === "object" && Object.keys(value).length === 0)
      )
    );
  };
  const { mutate: updateRecipe } = useUpdateRecipe();

  const onSubmit = async (data: FieldValues) => {
    const filterdData = filterEmptyValues(data);
    updateRecipe({ rId: params?.id, data: filterdData });
  };
  return (
    <div className=" ">
      <HeaderTitle text="Update Recipe"></HeaderTitle>
      <div className="p-2">
        <CForm
          defaultValues={{ recipe: data?.data?.recipe.recipe as string }}
          onFormSubmit={onSubmit}
        >
          <div className="grid gap-2">
            <CImageInput></CImageInput>
            <CInput label="Title" name="title"></CInput>
            <CInput label="Category" name="category"></CInput>

            <CTextEditor label="Recipe Content" name="recipe"></CTextEditor>

            <CButton text="Add Recipe"></CButton>
          </div>
        </CForm>
      </div>
    </div>
  );
};

export default UpdateRecipe;
