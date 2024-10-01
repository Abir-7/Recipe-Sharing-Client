export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: "user" | "admin"; // Assuming roles are restricted to these two values
  __v: number;
  isDeleted: boolean;
  isblocked: boolean;
}

export interface ICustomerProfile {
  _id: string;
  userName: string;
  email: string;
  photo: string;
  user: IUser;
  bio?: string;
  phone?: number;
  address?: string;
  __v: number;
}
