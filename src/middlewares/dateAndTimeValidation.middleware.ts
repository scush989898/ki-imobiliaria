import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const dateAndTimeValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { date, hour } = req.body;

  let formathour = 3600 * +hour.split(':')[0]
  let minutes = 60 * +hour.split(':')[1]
  let interval = formathour+minutes

  // horario de abertura 08h-18h
  // 08h = 28800 segundos
  // 18h = 64800 segundos

  if(interval<28800 || interval>64800){
    throw new AppError("Invalid hour");
  }

  date = new Date(date);
  const dayOfWeek = date.getDay();

  if (dayOfWeek == 6 || dayOfWeek == 0) {
    throw new AppError("Invalid Date");
  }
  
  //validar se a data é futura
  // const now = new Date();
  // if (now > date) {
  //   throw new AppError("Invalid Date");
  // }


  next();
};

export { dateAndTimeValidationMiddleware };
