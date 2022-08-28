import { Router } from "express";

import {
  createCategoryController,
  listAllCategoriesController,
  listCategoryByIdsController,
} from "../controllers/category.controller";

import isAdm from "../middlewares/isAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  isAdm,
  createCategoryController
);
categoriesRoutes.get("", listAllCategoriesController);
categoriesRoutes.get("/:id/properties", listCategoryByIdsController);

export default categoriesRoutes;
