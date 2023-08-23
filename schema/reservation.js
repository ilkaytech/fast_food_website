import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fulName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  phoneNumber: Yup.string().min(
    10,
    "Phone number must be at least 10 chracters"
  ),
  email: Yup.string().email("Email is invalid"),
});
