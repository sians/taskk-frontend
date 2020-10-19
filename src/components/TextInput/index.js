import React, { useState } from "react";

// import { ErrorText } from "Components/Text";
import StyledInput, { InputContainer } from "./style";

const TextInput = ({
  error,
  placeholder,
  defaultValue,
  label,
  onChange,
  type,
}) => {
  const [inputType, setInputType] = useState(type || "text");

  return (
    <InputContainer error={error}>
      {label && <p>{label}</p>}
      <StyledInput
        type={inputType}
        error={error}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
      {error && <span>{error}</span>}
    </InputContainer>
  );
};


export default TextInput;
