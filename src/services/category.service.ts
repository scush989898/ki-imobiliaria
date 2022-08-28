import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";
import { ICategoryRequest } from "../interfaces/categories";
import { Category } from "../entities/category.entity";

const createCategoryService = async (
  category: ICategoryRequest
): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categoryExists = await categoryRepository.findOneBy({
    name: category.name,
  });
  if (categoryExists) {
    throw new AppError("Category already exists");
  }

  const res = await categoryRepository.save(category);

  return res;
};
const listAllCategoriesService = async (): Promise<Category[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const res = await categoryRepository.find();

  return res;
};
const listCategoryByIdsService = async (id: string): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export {
  createCategoryService,
  listAllCategoriesService,
  listCategoryByIdsService,
};
