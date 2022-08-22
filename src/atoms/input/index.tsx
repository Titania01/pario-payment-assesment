import React from "react";
import { InputProps } from "../../utils/types";
import { Text } from "../Typography";
import { InputWrapper } from "./Input";

const Input = ({
  name,
  title,
  value,
  width,
  description,
  required,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <InputWrapper width={width}>
      <label htmlFor={title}>
        {title} {required && <sup>*</sup>}
      </label>
      {description && (
        <Text color="lightBlue" mg="1rem 0 0 0">
          {description}
        </Text>
      )}
      <div className="input-wrapper">
        <input
          type="text"
          required={required}
          value={value}
          id={title}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </InputWrapper>
  );
};

export default Input;
