"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CInput from "@/components/common/Form/CInput";
import { CRating } from "@/components/common/Form/CRating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/auth.provider";
import { useRatingOperation } from "@/hooks/recipe.hook";

import React, { useContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const RatingOperation = ({
  comments,
  recipeId,
  totalDislike,
  totalLikes,
}: {
  comments: { userEmail: string; comment: string[] }[];
  recipeId: string;
  totalLikes: number;
  totalDislike: number;
}) => {
  const userData = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const { mutate: addRating } = useRatingOperation();

  const handleRating = (data: Record<string, unknown>) => {
    addRating(data);
  };

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
  const onFormSubmit = async (data: FieldValues) => {
    const filteredData = filterEmptyValues(data);
    console.log(filteredData);
    handleRating({ ...data, recipeId });
  };
  const [oldComment, setOldComment] = useState("");
  const [newComment, setNewComment] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const editDeletComent = (data: {
    oldComment: string;
    newComment: string;
    recipeId: string;
  }) => {
    if (data.oldComment && data.newComment) {
      handleRating({ ...data });
    } else {
      toast.error("write comment to updated");
    }
    setNewComment("");
    setOldComment("");
    setIsEdit(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="  min-h-40 max-h-96 rounded-lg p-2 shadow-inner ">
          <div className="max-h-80 overflow-y-auto">
            {" "}
            {comments?.map((cmt, i) => (
              <p key={i} className="grid ">
                <span className="text-yellow-500 ">{cmt.userEmail}</span>{" "}
                <span>
                  {cmt.comment.map((c, i) => (
                    <span key={i} className="flex flex-col">
                      {userData?.user?.email === cmt.userEmail ? (
                        <span className=" flex items-center text-sm ">
                          {c}{" "}
                          <span
                            onClick={() => {
                              setOldComment(c);
                              setIsEdit(!isEdit);
                            }}
                            className="ms-5 text-green-500 duration-100 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                            </svg>
                          </span>
                          <span
                            onClick={() => {
                              editDeletComent({
                                recipeId,
                                oldComment: c,
                                newComment: "true",
                              });
                            }}
                            className="ms-2 text-red-500 duration-100 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                      ) : (
                        <span className=" flex items-center text-sm ">
                          {c}{" "}
                        </span>
                      )}
                    </span>
                  ))}
                </span>
              </p>
            ))}
          </div>
          <div className="  mt-2">
            {isEdit ? (
              <div className="flex justify-between gap-2">
                <Input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewComment(e.target.value);
                  }}
                  placeholder="Edit comment"
                ></Input>{" "}
                <Button
                  onClick={() =>
                    editDeletComent({ oldComment, newComment, recipeId })
                  }
                >
                  Edit Comment
                </Button>{" "}
                <Button
                  onClick={() => {
                    setIsEdit(false);
                    setOldComment("");
                  }}
                >
                  Cencel
                </Button>{" "}
              </div>
            ) : (
              <CForm onFormSubmit={onFormSubmit}>
                <div className="flex gap-5 items-center">
                  <CInput
                    placeHolder="Add Comment"
                    label=""
                    name="comment"
                  ></CInput>
                  <CRating label=""></CRating>
                  <CButton text="Add"></CButton>
                </div>
              </CForm>
            )}
          </div>
        </div>
      )}
      <div className="flex justify-between w-96 mx-auto mt-5 mb-10 ">
        <Button
          onClick={() => handleRating({ isLiked: true, recipeId })}
          variant={"default"}
          className="flex gap-2 items-center bg-green-500 hover:bg-green-400 duration-200 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>
          {totalLikes}
        </Button>
        <Button onClick={() => setIsOpen(!isOpen)}>Comments</Button>
        <Button
          onClick={() => handleRating({ isDisliked: true, recipeId })}
          variant={"destructive"}
          className="flex gap-2 items-center text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
            />
          </svg>
          {totalDislike}
        </Button>
      </div>
    </div>
  );
};

export default RatingOperation;
