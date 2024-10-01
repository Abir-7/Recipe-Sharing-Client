import DashboardCard from "@/components/common/dashboard/DashboardCard";
import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <HeaderTitle text="Admin Dashboard"></HeaderTitle>
      <div className="grid grid-cols-3 gap-4">
        <DashboardCard title={"Total User"} number={100}></DashboardCard>{" "}
      </div>
    </div>
  );
};

export default AdminDashboard;
