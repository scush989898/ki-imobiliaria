import { IUserRequest } from "../interfaces/users";
import * as yup from "yup";
import { SchemaOf } from "yup";

const newUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

export { newUserSchema };
