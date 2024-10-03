"use client";
import Modal from "@/components/common/modal/Modal";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useAdminDeleteRecipe } from "@/hooks/recipe.hook";
import React from "react";

const DeleteAdminModal = ({
  isDeleted,
  recipeId,
}: {
  isDeleted: boolean;
  recipeId: string;
}) => {
  const { mutate: deleteRecipe } = useAdminDeleteRecipe();
  const handleDelete = (id: string) => {
    deleteRecipe({ rId: id });
  };
  return (
    <div className="mt-1">
      <Modal
        title="Are you sure you want to delete?"
        btnText={"Delete"}
        btnCss={"w-full bg-red-500"}
      >
        <DialogClose disabled={isDeleted}>
          {" "}
          <Button
            disabled={isDeleted}
            className="w-full"
            onClick={() => handleDelete(recipeId)}
            variant={"destructive"}
          >
            Yes
          </Button>
        </DialogClose>
      </Modal>
    </div>
  );
};

export default DeleteAdminModal;
