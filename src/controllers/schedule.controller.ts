import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import {
  createScheduleService,
  listScheduleByIdService,
} from "../services/schedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  const schedule = req.body;
  schedule.userId = req.user.id;
  await createScheduleService(schedule);
  return res.status(201).json({ message: "Schedule created" });
};

const listScheduleByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const schedules = await listScheduleByIdService(id);
  return res.json(instanceToPlain(schedules));
};

export { createScheduleController, listScheduleByIdController };
