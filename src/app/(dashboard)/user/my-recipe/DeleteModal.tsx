"use client";
import Modal from "@/components/common/modal/Modal";
import { Button } from "@/components/ui/button";
import { useDeleteRecipe } from "@/hooks/recipe.hook";
import React from "react";

const DeleteModal = ({ recipeId }: { recipeId: string }) => {
  const { mutate: deleteRecipe } = useDeleteRecipe();
  const handleDelete = (id: string) => {
    deleteRecipe({ rId: id });
  };
  return (
    <div className="mt-1">
      <Modal
        title="Are you sure you want to delete?"
        btnText="Delete"
        btnCss="w-full"
      >
        <Button onClick={() => handleDelete(recipeId)} variant={"destructive"}>
          Yes
        </Button>
      </Modal>
    </div>
  );
};

export default DeleteModal;
