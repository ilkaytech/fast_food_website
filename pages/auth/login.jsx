import React from "react";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";

const Login = () => {
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20">
        <Title addClass="text-[40px] ">Login</Title>
        <div className="flex flex-col gap-y-2">
          <Input />
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Login;
