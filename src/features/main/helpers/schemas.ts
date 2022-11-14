import * as yup from "yup";

export const leadFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "put at least 3 letters")
    .required("Name is required"),
  email: yup.string().email("Not valid email").required("Email is required"),
  nationalId: yup
    .number()
    .min(3, "Put 3 numbers")
    .required("National ID is required"),
});

export const errorMessagesSchema = {
  identity: "name or e-mail doesn't match",
  legal: "Due legal processes, you are not eligible for this offer",
  score: "Due your score, you are not eligible for this offer",
};
