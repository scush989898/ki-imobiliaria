import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const isAdm = async (req: Request, res: Response, next: NextFunction) => {
  const isadm = req.user.isAdm;
  if (!isadm) {
    throw new AppError("User is not admin", 403);
  }
  next();
};

export default isAdm;
