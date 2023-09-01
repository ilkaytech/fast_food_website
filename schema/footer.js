import * as Yup from "yup";

export const footerSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  phoneNumber: Yup.string()
    .required("Phone number is required.")
    .min(10, "Phone number must be at least 10 chracters"),
  email: Yup.string().required("Email is invalid.").email("Email is invalid"),
  address: Yup.string().required("Address is required."),
  job: Yup.string().required("Job is required."),
  bio: Yup.string().required("Bio is required."),
});
