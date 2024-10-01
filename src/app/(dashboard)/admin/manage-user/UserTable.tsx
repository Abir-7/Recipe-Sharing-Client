import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICustomerProfile } from "@/interface/userProfile.interface";
import TableAction from "./TableAction";

const UserTable = ({ users }: { users: ICustomerProfile[] }) => {
  return (
    <Table className=" border-x border-t">
      <TableHeader>
        <TableRow className="bg-slate-950">
          <TableHead className="w-[100px] text-yellow-400">Name</TableHead>
          <TableHead className="text-yellow-400">Email</TableHead>
          <TableHead className="text-yellow-400">User Role</TableHead>
          <TableHead className="text-yellow-400">Bio</TableHead>
          <TableHead className="text-yellow-400">Phone</TableHead>
          <TableHead className="text-yellow-400">Address</TableHead>
          <TableHead className="text-yellow-400">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((info) => (
          <TableRow key={info?._id}>
            <TableCell className="font-medium w-64">{info?.userName}</TableCell>
            <TableCell>{info?.email}</TableCell>
            <TableCell>{info?.user?.role}</TableCell>
            <TableCell className="">{info?.bio ? info?.bio : "N/A"}</TableCell>
            <TableCell className="">
              {info?.phone ? info?.phone : "N/A"}
            </TableCell>
            <TableCell className="">
              {info?.address ? info?.address : "N/A"}
            </TableCell>
            <TableCell className="">
              <TableAction userId={info?.user?._id}></TableAction>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
