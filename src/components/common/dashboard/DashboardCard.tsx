import React from "react";

const DashboardCard = ({
  title,
  number,
}: {
  title: string;
  number: number;
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm mx-auto">
      <h2 className="text-gray-600 text-xl font-semibold">{title}</h2>
      <div className="mt-4 text-center">
        <p className="text-5xl font-bold text-gray-800">{number}</p>
        <div className="flex items-center justify-center mt-2 text-green-500">
          <span className="text-lg font-semibold">↑ 20%</span>
        </div>
        <p className="mt-1 text-sm text-gray-500">vs previous 30 days</p>
      </div>
    </div>
  );
};

export default DashboardCard;
