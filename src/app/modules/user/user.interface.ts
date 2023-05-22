import { HydratedDocument, Model } from "mongoose";

// Create Interface
export interface IUser {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  role: "student" | "admin";
  dateOfBirth?: string;
  gender: "male" | "female" | "others";
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// methods
export interface IUserMethods {
  fullName(): string;
}

// statics
export interface AdminUserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser[], IUserMethods>>;
}
