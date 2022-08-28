import { Request, Response } from "express";
import {
  createCategoryService,
  listAllCategoriesService,
  listCategoryByIdsService,
} from "../services/category.service";

const createCategoryController = async (req: Request, res: Response) => {
  const category = req.body;
  const newCategory = await createCategoryService(category);
  return res.status(201).json(newCategory);
};

const listAllCategoriesController = async (req: Request, res: Response) => {
  const list = await listAllCategoriesService();
  return res.json(list);
};

const listCategoryByIdsController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await listCategoryByIdsService(id);
  return res.json(category);
};

export {
  createCategoryController,
  listAllCategoriesController,
  listCategoryByIdsController,
};
