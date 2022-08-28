import { Router } from "express";
import { loginUserSchema } from "../schemas/loginUser.schema";
import { validationMiddleware } from "../middlewares/validationSchema.middleware";
import { createSessionController } from "../controllers/session.controller";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  validationMiddleware(loginUserSchema),
  createSessionController
);

export default sessionRoutes;
