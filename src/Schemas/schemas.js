import * as Yup from "yup";

export const registerUserSchema = Yup.object().shape({
  name: Yup.string().trim().min(2, "Too short!").max(254, "Too long!"),
  email: Yup.string()
    .trim()
    .email()
    .min(2, "Too short!")
    .max(254, "Too long!")
    .required("Please insert your email!"),
  password: Yup.string()
    .trim()
    .min(8, "Too short!")
    .max(100, "Too long!")
    .required("Please insert your password!"),
  confirmPassword: Yup.string()
    .trim()
    .min(8, "Too short!")
    .max(100, "Too long!")
    .required("Please insert your password!"),
});

export const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email()
    .min(2, "Too short!")
    .max(254, "Too long!")
    .required("Please insert your email!"),
  password: Yup.string()
    .trim()
    .min(8, "Too short!")
    .max(100, "Too long!")
    .required("Please insert your password!"),
});
