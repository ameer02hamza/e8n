
"use client";
import { useField } from "formik";
import React from "react";

/**
 * This is the Higher Order Component for the Input Field
 * @param {WrappedComponent} WrappedComponent
 * @param  {type} type required
 * @param  {label} label required
 * @param  {placeholder} placeholder required
 * @returns {function} WithInputValidation
 */
const WithInputValidation = (WrappedInputComponent: React.ComponentType) => {
  return function WithInputValidation(props) {
    const [field] = useField(props.name);
    return <WrappedInputComponent {...field}  {...props} />;
  };
};

export default WithInputValidation;
