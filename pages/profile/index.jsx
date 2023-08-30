import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { reservationSchema } from "../../schema/reservation";

const Profile = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((revolse) => setTimeout(revolse, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
    {
      id: 6,
      name: "date",
      type: "datetime-local",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)]">
      <div className="w-80">
        <div
          className="relative flex flex-col items-center px-10 py-5
        border border-b-0"
        >
          <Image
            src="/images/client2.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">John Doe</b>
        </div>
        <ul className="font-semibold">
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-house-user"></i>
            <button className="ml-2">Account</button>
          </li>
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-key"></i>
            <button className="ml-2">Password</button>
          </li>
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-shipping-fast"></i>
            <button className="ml-2">Orders</button>
          </li>
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-sign-out-alt"></i>
            <button className="ml-2">Exit</button>
          </li>
        </ul>
      </div>
      <div className="p-8">
        <Title addClass="text-[40px]">Account Settings</Title>
        <div className="grid grid-cols-2">
          {inputs.map((input) => (
            <Input key="input.id" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
