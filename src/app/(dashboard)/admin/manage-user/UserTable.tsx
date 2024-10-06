import { ICustomerProfile } from "@/interface/userProfile.interface";
import TableAction from "./TableAction";

const UserTable = ({ users }: { users: ICustomerProfile[] }) => {
  return (
    <div className="overflow-x-auto">
      <div className="w-96 md:w-full mt-2 flex justify-center ">
        <table className=" bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                Name
              </th>
              <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                Email
              </th>
              <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                Role
              </th>
              <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                Address
              </th>
              <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                Phone
              </th>
              <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user?.userName}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user?.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user?.user?.role}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user?.address ? user?.address : "N/A"}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user?.phone ? user.phone : "N/A"}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <TableAction userId={user?.user._id}></TableAction>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
