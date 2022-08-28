import {
  createUserService,
  listAllUsersService,
  softDeleteUserService,
} from "../services/user.service";

import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const data = req.body;
  const newUser = await createUserService(data);
  return res.status(201).json(instanceToPlain(newUser));
};
const listAllUsersController = async (req: Request, res: Response) => {
  const listUsers = await listAllUsersService();
  return res.json(instanceToPlain(listUsers));
};
const softDeleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await softDeleteUserService(id);
  return res.status(204).send();
};

export {
  createUserController,
  listAllUsersController,
  softDeleteUserController,
};
