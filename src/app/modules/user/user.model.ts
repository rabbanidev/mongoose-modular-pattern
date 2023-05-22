import { Model, Schema, model } from "mongoose";
import { AdminUserModel, IUser, IUserMethods } from "./user.interface";

// for methods
// type UserModel = Model<IUser, {}, IUserMethods>;

// create schema and model
const userSchema = new Schema<IUser, AdminUserModel, IUserMethods>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  role: {
    type: String,
    enum: ["student", "admin"],
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: true,
  },
  email: {
    type: String,
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

// for methods
userSchema.method("fullName", function fullName() {
  return (
    this.name.firstName + " " + this.name.middleName + " " + this.name.lastName
  );
});

// for static
userSchema.static("getAdminUsers", async function getAdminUsers(): Promise<
  IUser[]
> {
  const adminUsers = await this.find({ role: "admin" });
  return adminUsers;
});

// create model
const User = model<IUser, AdminUserModel>("User", userSchema);

export default User;
