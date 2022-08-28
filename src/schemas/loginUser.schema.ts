import { IUserLogin } from "../interfaces/users";
import * as yup from "yup";
import { SchemaOf } from "yup";

const loginUserSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { loginUserSchema };
