"use client";
import { AuthContext } from "@/context/auth.provider";
import { useFollowUser, useUnfollowUser } from "@/hooks/user.hooks";
import React, { useContext } from "react";

const UserFollow = ({
  userEmail,
  userID,
  isFollower,
}: {
  userID: string;
  isFollower: boolean;
  userEmail: string;
}) => {
  const { mutate: followUser } = useFollowUser();
  const { mutate: unfollowUser } = useUnfollowUser();
  const hamdleFollow = (id: string) => {
    followUser({ userID: id });
  };
  const hamdleUnfollow = (id: string) => {
    unfollowUser({ userID: id });
  };
  const authData = useContext(AuthContext);
  return (
    <>
      {isFollower ? (
        <>
          {userEmail === authData?.user?.email ? (
            <></>
          ) : (
            <div
              onClick={() => {
                hamdleUnfollow(userID);
              }}
              className="flex group gap-1"
            >
              {" "}
              <span className="text-red-500 group-hover:scale-110 duration-150 group-active:scale-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </span>
              <span className="font-bold">Unfollow User</span>
            </div>
          )}
        </>
      ) : (
        <>
          {userEmail === authData?.user?.email ? (
            <></>
          ) : (
            <div
              onClick={() => {
                hamdleFollow(userID);
              }}
              className="flex group gap-1"
            >
              {" "}
              <span className="text-gray-950 group-hover:scale-110 duration-150 group-active:scale-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </span>
              <span className="font-bold">follow User</span>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserFollow;
