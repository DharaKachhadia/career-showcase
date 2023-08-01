import React from "react";
import "./input.scss";

function TextInput(props) {
  const { name, placeholder, value, onChange } = props;
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full outline-none bg-transparent border-b border-[#323bac20] hover:border-[#323bac] focus:border-[#323bac] pl-1 text-[#323bac] "
    />
  );
}

export default TextInput;
  