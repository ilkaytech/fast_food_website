import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string()
    .required("Location is required.")
    .min(3, "Full name must be at least 3 characters."),
  phoneNumber: Yup.string()
    .required("Phone number is required.")
    .min(10, "Phone number must be at least 10 chracters"),
  email: Yup.string().required("Email is invalid.").email("Email is invalid"),
  desc: Yup.string().required("Desc is required."),
  time: Yup.string().required("Time is required."),
});
