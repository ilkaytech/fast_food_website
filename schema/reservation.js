import * as Yup from "yup";

export const reservationSchema = Yub.object({
  fulName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
});
