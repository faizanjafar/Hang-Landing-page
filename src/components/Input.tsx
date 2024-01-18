import React from "react";

interface Props {
  type: string;
  name: string;
  id: string;
  placeholder: string;
}
const Input = ({ type, name, id, placeholder }: Props) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="rounded-md py-3 px-4 bg-white outline-none focus:ring-2 focus:ring-[#fff] text-sm placeholder-gray-950"
    />
  );
};

export default Input;
