import * as Yup from "yup";

export const registerUserSchema = Yup.object().shape({
  name: Yup.string().trim(),
  email: Yup.string()
    .trim()
    .email()
    .min(3, "Too short!")
    .required("Please insert your email!"),
  password: Yup.string()
    .trim()
    .min(8, "Too short!")
    .max(64, "Too long!")
    .required("Please insert your password!"),
});

export const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email()
    .min(3, "Too short!")
    .required("Please insert your email!"),
  password: Yup.string()
    .trim()
    .min(8, "Too short!")
    .max(64, "Too long!")
    .required("Please insert your password!"),
});
