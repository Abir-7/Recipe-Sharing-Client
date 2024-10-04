"use client";
import Modal from "@/components/common/modal/Modal";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useAdminUnpublishRecipe } from "@/hooks/recipe.hook";
import React from "react";

const UnpublishModal = ({
  recipeId,
  isPublished,
}: {
  recipeId: string;
  isPublished: boolean;
}) => {
  const { mutate: deleteRecipe } = useAdminUnpublishRecipe();
  const handleUnpublish = (id: string) => {
    deleteRecipe({ rId: id });
  };
  return (
    <div className="mt-1">
      <Modal
        btnType={isPublished ? "destructive" : "default"}
        title="Are you sure you want to Change Publish status?"
        btnText={isPublished ? "Unpublish" : "Publish"}
        btnCss="w-full "
      >
        <DialogClose className="w-full">
          <Button
            className="w-full"
            onClick={() => handleUnpublish(recipeId)}
            variant={"destructive"}
          >
            Yes
          </Button>
        </DialogClose>
      </Modal>
    </div>
  );
};

export default UnpublishModal;
