"use client";
import UserInput from "@/components/ui/user-input";
import {  imgLogo } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { initialLoginUser, LoginUser } from "@/types/auth.type";
import FormButton from "@/components/ui/form-btn";
import { useAuthContext } from "@/context/auth-context";
function LoginPage() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const { loginUser, loginLoading } = useAuthContext();
  const handleSubmit = async (values:LoginUser) => {
    loginUser(values);
    console.log("login", values);
  };
  return (
    <section className="flex justify-center relative">
      {/* <img
        src={imgBackground}
        alt="gradient background image"
        className="w-full h-full object-cover fixed"
      /> */}
      <div className="mx-auto w-full md:w-1/2 lg:w-1/3  px-6 lg:px-8 absolute py-10">
        <Image
          src={imgLogo}
          width={100}
          height={100}
          alt="logo"
          className="mx-auto lg:mb-11 mb-5 object-cover"
        />
        <div className="rounded-2xl bg-white shadow-xl ">
          <div className="lg:p-11 p-7 mx-auto">
            <div className="mb-11">
              <h1
                className="text-gray-900 text-center font-manrope text-3xl 
              font-bold leading-10 mb-2"
              >
                Welcome Back
              </h1>
            </div>
            <Formik
              initialValues={initialLoginUser}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({ errors, touched }) => (
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <UserInput
                      label="Email"
                      hint="a@a.com"
                      type="text"
                      name="email"
                      maxLength={20}
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <UserInput
                      label="Password"
                      hint="*********"
                      type="password"
                      name="password"
                      maxLength={20}
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <a className="flex justify-end mb-6">
                    <span className="text-indigo-600 text-right text-base font-normal leading-6">
                      Forgot Password?
                    </span>
                  </a>
                  <FormButton title={"Login"} loading={loginLoading} />
                </Form>
              )}
            </Formik>
            <Link
              href={"/signup"}
              className="flex justify-center text-gray-900 text-base font-medium leading-6"
            >
              {" "}
              Don’t have an account?
              <span className="text-indigo-600 font-semibold pl-3">
                {" "}
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
