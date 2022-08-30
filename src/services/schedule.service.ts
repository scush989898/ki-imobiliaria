import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";
import { IScheduleRequest } from "../interfaces/schedules";
import { Schedules } from "../entities/schedule.entity";
import { User } from "../entities/user.entity";
import { Property } from "../entities/property.entity";

const createScheduleService = async (
  newSchedule: IScheduleRequest
): Promise<Schedules> => {
  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Property);
  const schedulesRepository = AppDataSource.getRepository(Schedules);

  const user = await userRepository.findOneBy({ id: newSchedule.userId });
  const property = await propertyRepository.findOneBy({
    id: newSchedule.propertyId,
  });

  if (!user) {
    throw new AppError("User Not Found", 404);
  }
  if (!property) {
    throw new AppError("Property Not Found", 404);
  }

  let { date, hour } = newSchedule;
  const createSchedule = schedulesRepository.create({
    date,
    hour,
    property,
    user,
  });

  const scheduleExists = await schedulesRepository.findOne({
    where: {
      hour,
      date,
      property: {
        id: property.id,
      }
    },
  });

  if (scheduleExists) {
    throw new AppError("Schedule already exists");
  }

  const res = await schedulesRepository.save(createSchedule);
  return res;
};

const listScheduleByIdService = async (id: string): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const property = await propertyRepository.findOneBy({ id });
  if (!property) {
    throw new AppError("Property Not Found", 404);
  }
  const res = await propertyRepository.findOne({
    where: {
      id,
    },
    relations: {
      category: true,
      schedules: true,
    },
  });
 

  return res!;
};

export { createScheduleService, listScheduleByIdService };
