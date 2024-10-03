import { ICustomerProfile } from "@/interface/userProfile.interface";
import TableAction from "./TableAction";

const UserTable = ({ users }: { users: ICustomerProfile[] }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>

            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Mobile
            </th>
            <th scope="col" className="px-6 py-3">
              Bio
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((uData) => (
            <tr
              key={uData._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {uData?.userName}
              </th>
              <td className="px-6 py-4">{uData?.email}</td>
              <td className="px-6 py-4">{uData.user?.role}</td>
              <td className="px-6 py-4">
                {uData?.address ? uData?.address : "N/A"}
              </td>
              <td className="px-6 py-4">
                {uData?.phone ? uData?.phone : "N/A"}
              </td>
              <td className="px-6 py-4">{uData?.bio ? uData?.bio : "N/A"}</td>
              <td className="">
                {" "}
                <TableAction userId={uData._id}></TableAction>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
