import { Request, Response } from "express";
import {
  createPropertyService,
  listAllPropertiesService,
} from "../services/property.service";

const createPropertyController = async (req: Request, res: Response) => {
  const property = req.body;
  const newProperty = await createPropertyService(property);
  return res.status(201).json(newProperty);
};

const listAllPropertiesController = async (req: Request, res: Response) => {
  const list = await listAllPropertiesService();
  return res.json(list);
};

export { createPropertyController, listAllPropertiesController };
