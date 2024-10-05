import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import ProfileUpdate from "@/components/common/userProfile/ProfileUpdate";

import React from "react";

const page = async () => {
  return (
    <div>
      <HeaderTitle text="User Profile"></HeaderTitle>

      <ProfileUpdate></ProfileUpdate>
    </div>
  );
};
export default page;
