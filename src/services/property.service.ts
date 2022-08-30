import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";
import { IPropertyRequest } from "../interfaces/properties";
import { Property } from "../entities/property.entity";
import { Address } from "../entities/adress.entity";
import { Category } from "../entities/category.entity";

const createPropertyService = async (
  property: IPropertyRequest
): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const addressRepository = AppDataSource.getRepository(Address);
  const categoryRepository = AppDataSource.getRepository(Category);

  let { value, size, categoryId, address } = property;

  const category = await categoryRepository.findOneBy({ id: categoryId });
  if (!category) {
    throw new AppError("Category not found", 404);
  }

  address = addressRepository.create(address);
  const addressExists = await addressRepository.findOne({ where: address });
  if (addressExists) {
    throw new AppError("Address already exists");
  }

  await addressRepository.save(address);

  const res = await propertyRepository.save({
    value,
    size,
    address,
    category,
  });

  return res;
};

const listAllPropertiesService = async (): Promise<Property[]> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const list = await propertyRepository.find({
    relations:{
      category:true
    }
  });
  return list;
};

export { createPropertyService, listAllPropertiesService };
