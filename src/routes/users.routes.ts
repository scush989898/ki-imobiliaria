import { Router } from "express";
import {
  createUserController,
  listAllUsersController,
  softDeleteUserController,
} from "../controllers/user.controller";

import { validationMiddleware } from "../middlewares/validationSchema.middleware";
import { newUserSchema } from "../schemas/newUser.schema";

import isAdm from "../middlewares/isAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const usersRoutes = Router();

usersRoutes.post("", validationMiddleware(newUserSchema), createUserController);

usersRoutes.get("", ensureAuthMiddleware, isAdm, listAllUsersController);

usersRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  isAdm,
  softDeleteUserController
);

export default usersRoutes;
