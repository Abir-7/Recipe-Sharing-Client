export interface IAuthUser {
  photo: string;
  email: string;
  role: "user" | "admin" | "superAdmin"; // If there are more roles, you can add them here.
  id: string;
  iat: number; // Issued at time (Unix timestamp)
  exp: number; // Expiration time (Unix timestamp)
}
