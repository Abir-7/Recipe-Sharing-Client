"use client";
import Modal from "@/components/common/modal/Modal";

import { DialogClose } from "@/components/ui/dialog";
import { useBlockUser, useDeleteUser } from "@/hooks/admin.hook";
import React from "react";

const TableAction = ({ userId }: { userId: string }) => {
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: blockUser } = useBlockUser();

  const handleBlockUser = (id: string) => {
    blockUser(id);
  };
  const handleDeleteUser = (id: string) => {
    deleteUser(id);
  };
  return (
    <div>
      <Modal
        btnCss="text-red-500 hover:scale-110 active:scale-90 duration-500 "
        description=""
        title="Are you sure you want to block?"
        btnType={null}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        }
      >
        <DialogClose
          onClick={() => handleBlockUser(userId)}
          className="bg-gray-950 text-yellow-400 py-2 rounded-md"
        >
          Yes
        </DialogClose>
      </Modal>
      <Modal
        btnCss="text-red-500 hover:scale-110 active:scale-90 duration-500 "
        description=""
        title="Are you sure you want to Delete?"
        btnType={null}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        }
      >
        {" "}
        <DialogClose
          onClick={() => handleDeleteUser(userId)}
          className="bg-gray-950 text-yellow-400 py-2 rounded-md"
        >
          Yes
        </DialogClose>
      </Modal>
    </div>
  );
};

export default TableAction;
