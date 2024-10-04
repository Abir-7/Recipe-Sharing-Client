import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import envConfig from "@/config/envConfig";
import { ICustomerProfile } from "@/interface/userProfile.interface";
import Image from "next/image";
const TopUser = async () => {
  const response = await fetch(`${envConfig.baseApi}/customer/top-follower`, {
    cache: "no-store",
  });
  const { data } = await response.json();

  return (
    <div className="container mx-auto mb-10">
      <h1 className="text-3xl text-center my-5 font-bold">Populer Users</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {(data as ICustomerProfile[])?.map((info) => (
          <Card key={info?._id} className=" w-96 p-2 items-center flex ">
            <div className="w-28  rounded-full  mx-auto  h-28 bg-gray-950">
              <Image
                className="object-cover rounded-full w-full h-full"
                width={200}
                height={200}
                alt=""
                src={info?.photo}
              ></Image>
            </div>
            <div>
              <CardHeader className="">
                <CardTitle>{info.userName}</CardTitle>
                <CardDescription className="text-sm text-wrap">
                  {info?.email}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex gap-1">
                <p className="font-bold text-sm">Follower: </p>{" "}
                <p className="font-bold text-sm">{info.followers.length}</p>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopUser;
