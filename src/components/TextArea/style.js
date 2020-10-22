import styled from "styled-components";

export const TextAreaContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  color: ${props =>
    props.error
      ? 'red'
      : 'black'};
  > p {
    margin: 16px 0;
  }
`;

const TextArea = styled.textarea`
  border-radius: 2px;
  resize: none;
  padding: 8px;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: black;
  outline: none;
  &:focus {
    outline: none;
    border-radius: 2px;
    border-color: ${(props) =>
      props.error
        ? 'red'
        : 'black'};
  }
  &:disabled {
    background-color: white;
    color: black;
  }
`;

export default TextArea;
