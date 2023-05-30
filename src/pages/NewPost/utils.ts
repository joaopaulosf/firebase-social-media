import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("You must add a title."),
  description: yup.string().required("You must add a description."),
});
