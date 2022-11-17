import * as yup from "yup";

export const leadFormValidationErrorSchema = {
  name: {
    required: "Name is required",
    custom: "put at least 3 letters",
  },
  email: {
    required: "Email is required",
    custom: "Not valid email",
  },
  nationalId: {
    required: "National ID is required",
    custom: "Put 3 numbers",
  },
};

const { name, email, nationalId } = leadFormValidationErrorSchema;

export const leadFormSchema = yup.object().shape({
  name: yup.string().min(3, name.custom).required(name.required),
  email: yup.string().email(email.custom).required(email.required),
  nationalId: yup
    .number()
    .min(3, nationalId.custom)
    .required(nationalId.required),
});

export const errorMessagesSchema = {
  identity: "name or e-mail doesn't match",
  legal: "Due legal processes, you are not eligible for this offer",
  score: "Due your score, you are not eligible for this offer",
};
