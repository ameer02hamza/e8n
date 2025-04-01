import React from 'react'
import WithInputValidation from '../hocs/input-hoc'

function UserInput({ ...props }) {
  return (
    <div className="w-full  my-2">
    <label
      htmlFor="user_input"
      className="block mb-2 text-sm font-medium text-gray-900 text-nowrap"
    >
      {props.label}
    </label>
    <input
      {...props}
      type={props.type}
      id="user_input"
      className="border-b focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg
         w-full p-2.5 focus:border-b focus:ring-0
       [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 
       [&::-webkit-inner-spin-button]:appearance-none 
       [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
      placeholder={props.hint ?? props.label}
      maxLength={props.maxLength}
    />
  </div>
  )
}

export default WithInputValidation(UserInput)