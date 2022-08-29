import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";
import { IUserLogin } from "../interfaces/users";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../entities/user.entity";


const createSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (user?.isActive == false) throw new AppError("User is not active");
  if (!user) throw new AppError("Invalid email or password", 401);
  if (!user.isActive) throw new AppError("Invalid user", 401);

  const matchPassword = await compare(password, user.password);
  if (!matchPassword) throw new AppError("Invalid credentials", 403);
  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      isActive: user.isActive,
    },
    String(process.env.SECRET_KEY),
    {
      subject: user.id,
      expiresIn: "2h",
    }
  );

 
  return token;
};

export default createSessionService;
