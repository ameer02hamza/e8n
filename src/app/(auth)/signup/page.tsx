"use client";
import FormButton from "@/components/ui/form-btn";
import UserInput from "@/components/ui/user-input";
import {  imgLogo } from "@/constants/images";
import { initialSignupUser, SignupUser } from "@/types/auth.type";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";
import { useAuthContext } from "@/context/auth-context";
function SignupPage() {
  const { regLoading, signupUser } = useAuthContext();
  const handleSubmit = async (values: SignupUser) => {
    console.log("signup", values);
    signupUser(values);
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("First name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm Password is required"),
  });
  return (
    <section className="flex justify-center relative">
      {/* <img
        src={imgBackground}
        alt="gradient background image"
        className="w-full h-full object-cover fixed"
      /> */}
      <div className="mx-auto w-full md:w-1/2  px-6 lg:px-8 absolute py-10">
        <Image
          src={imgLogo}
          width={100}
          height={100}
          alt="logo"
          className="mx-auto lg:mb-11 mb-5 object-cover"
        />
        <div className="rounded-2xl bg-white shadow-xl">
          <Formik
            initialValues={initialSignupUser}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="lg:p-11 p-7 mx-auto">
                  <div className="">
                    <h1
                      className="text-gray-900 text-center font-manrope text-3xl 
              font-bold leading-10 mb-2"
                    >
                      Welcome To e8n
                    </h1>
                    <p
                      className="text-gray-500 text-center text-base font-medium
               leading-6"
                    >
                      Let’s watch your favorite movies and series
                    </p>
                  </div>
                  <div>
                    <UserInput
                      label="Full Name"
                      hint="peter Parker"
                      type="text"
                      name="fullName"
                      maxLength={20}
                    />
                    {errors.fullName && touched.fullName && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </div>
                    )}
                  </div>

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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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
                    <div>
                      <UserInput
                        label="Confirm Password"
                        hint="*********"
                        type="password"
                        name="confirmPassword"
                        maxLength={20}
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                  </div>
                  <FormButton title={"Signup"} loading={regLoading} />

                  <Link
                    href={"/"}
                    className="flex justify-center text-gray-900 text-base font-medium leading-6"
                  >
                    {" "}
                    Already have an account?
                    <span className="text-indigo-600 font-semibold pl-3">
                      {" "}
                      Login
                    </span>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
