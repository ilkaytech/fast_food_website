import React, { useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footer";

const Footer = () => {
  const [linkAddress, setLinkAddress] = useState("");
  const [iconName, setIconName] = useState("");

  const onSubmit = async (values, actions) => {
    await new Promise((revolse) => setTimeout(revolse, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Your Description",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Update Day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Update Time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];

  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Account Settings</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Input placeholder="Link Address" value="https://" />
          <Input placeholder="Icon Name" value="fa-fa" />
          <button className="btn-primary" type="button">
            Add
          </button>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <i className="fab fa-facebook text-2xl"></i>
            <button className="text-danger">
              <i className="fa fa-trash text-xl"></i>
            </button>
          </li>
          <li>
            <i className="fab fa-twitter text-2xl"></i>
            <button className="text-danger">
              <i className="fa fa-trash text-xl"></i>
            </button>
          </li>
          <li>
            <i className="fab fa-instagram text-2xl"></i>
            <button className="text-danger">
              <i className="fa fa-trash text-xl"></i>
            </button>
          </li>
          <li>
            <i className="fab fa-linkedin text-2xl"></i>
            <button className="text-danger">
              <i className="fa fa-trash text-xl"></i>
            </button>
          </li>
          <li>
            <i className="fab fa-github text-2xl"></i>
            <button className="text-danger">
              <i className="fa fa-trash text-xl"></i>
            </button>
          </li>
        </ul>
      </div>
      <button className="btn-primary mt-4">Update</button>
    </form>
  );
};

export default Footer;
