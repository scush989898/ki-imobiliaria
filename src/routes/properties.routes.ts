import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdm from "../middlewares/isAdm.middleware";
import {
  createPropertyController,
  listAllPropertiesController,
} from "../controllers/property.controller";
import { validationMiddleware } from "../middlewares/validationSchema.middleware";
import { newPropertySchema } from "../schemas/propertySchema.schema";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  isAdm,
  validationMiddleware(newPropertySchema),
  createPropertyController
);
propertiesRoutes.get("", listAllPropertiesController);

export default propertiesRoutes;
