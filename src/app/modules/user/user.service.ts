import User from "./user.model";
import { IUser } from "./user.interface";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); // User --- Class, instance --- user
  await user.save(); // user.save() --- built in instance methods
  // console.log(user.fullName()); // user.fullName() --- custom in instance methods
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string | null
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload });
  return user;
};

export const getAdminUsersFromDB = async (): Promise<IUser[]> => {
  const admins = await User.getAdminUsers();
  return admins;
};
