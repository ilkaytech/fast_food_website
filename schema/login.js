import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("Email is invalid.").email("Email is invalid"),
  password: Yup.string().required("Password is required."),
});
