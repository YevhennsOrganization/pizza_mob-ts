import * as Yup from "yup";

export const CartFormSchema = Yup.object().shape({
  name: Yup.string().required("Це обов'язкове поле"),
  number: Yup.string()
    .min(10, "Номер повинен містити 10 цифр")
    .max(10, "Забагато цифр")
    .required("Це обов'язкове поле"),
  address: Yup.string().required("Це обов'язкове поле"),
  comment: Yup.string(),
});
