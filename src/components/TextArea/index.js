import React from "react";
import PropTypes from "prop-types";

import StyledTextArea, { TextAreaContainer } from "./style";

const TextArea = ({ 
  error, 
  placeholder, 
  defaultValue, 
  label, 
  onChange, 
  onFocus,
  background,
  color
}) => (
  <TextAreaContainer error={error}>
    {label && <p>{label}</p>}
    <StyledTextArea
      resize={false}
      error={error}
      placeholder={placeholder}
      background={background}
      color={color}
      onFocus={onFocus}
    ></StyledTextArea>
    {error && <p>{error}</p>}
  </TextAreaContainer>
);

TextArea.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

export default TextArea;
