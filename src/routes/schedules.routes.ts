import { Router } from "express";
import {
  createScheduleController,
  listScheduleByIdController,
} from "../controllers/schedule.controller";

import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdm from "../middlewares/isAdm.middleware";
import { dateAndTimeValidationMiddleware } from "../middlewares/dateAndTimeValidation.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post(
  "",
  ensureAuthMiddleware,
  dateAndTimeValidationMiddleware,
  createScheduleController
);
schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  isAdm,
  listScheduleByIdController
);

export default schedulesRoutes;
