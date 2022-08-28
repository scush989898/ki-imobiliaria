import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";
import { IUserRequest } from "../interfaces/users";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs";

const createUserService = async (newUser: IUserRequest): Promise<User> => {
  newUser.password = await hash(newUser.password, 10);
  const userRepository = AppDataSource.getRepository(User);
  const userExists = await userRepository.findOneBy({ email: newUser.email });

  if (userExists) {
    throw new AppError("User Already Exists", 400);
  }

  const user = userRepository.create(newUser);
  const res = await userRepository.save(user);

  return res;
};

const listAllUsersService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const res = await userRepository.find();
  return res;
};

const softDeleteUserService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const currentUser = await userRepository.findOneBy({ id });

  if (!currentUser) throw new AppError("User not found", 404);
  if (currentUser.isActive == false) throw new AppError("Inactive User");

  currentUser.isActive = false;

  await userRepository.update({ id }, currentUser);
};

export { createUserService, listAllUsersService, softDeleteUserService };
