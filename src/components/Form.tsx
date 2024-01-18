import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <form className="flex flex-col gap-6">
      <Input type="text" name="name" id="name" placeholder="Name" />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Business email"
      />
      <Input
        type="text"
        name="bussiness"
        id="bussiness"
        placeholder="Business Name"
      />
      <select
        name="select"
        id="select"
        className="rounded-md py-3 px-4 bg-white outline-none focus:ring-2 focus:ring-[#fff] w-full text-sm placeholder-gray-950"
      >
        <option value="Do you have an existing loyalty program?">
          Do you have an existing loyalty program?
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <textarea
        name="message"
        id="message"
        className="rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-[#fff] appearance-none w-full bg-white text-sm placeholder-gray-950"
        placeholder="Any additional information ?"
        rows={5}
      ></textarea>

      <button className="py-3 px-4 rounded-full bg-[#5640e8] font-extrabold text-white mt-4 hover:shadow-md">
        Demo
      </button>
    </form>
  );
};

export default Form;
