import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const dateAndTimeValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { date, hour } = req.body;

  date = new Date(date);
  const dayOfWeek = date.getDay();

  const minutes = +hour.split(":")[1];
  hour = +hour.split(":")[0];

  //validar se a data é futura
  // const now = new Date();
  // if (now > date) {
  //   throw new AppError("Invalid Date");
  // }
  
  if (minutes == 0 && hour == 18) {
    next();
  }
  if (hour < 8 || hour >= 18) {
    throw new AppError("Invalid hour");
  }
  if (dayOfWeek == 6 || dayOfWeek == 0) {
    throw new AppError("Invalid Date");
  }
  next();
};

export { dateAndTimeValidationMiddleware };
