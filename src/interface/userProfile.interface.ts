export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: "user" | "admin" | "superAdmin"; // Assuming roles are restricted to these two values
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
////////////////////ADMIN/////////////////////

export interface IAdminProfile {
  _id: string;
  id: string;
  user: IUser;
  userName: string;
  email: string;
  phone: number;
  photo: string;
  address: string;
  __v: number;
}
