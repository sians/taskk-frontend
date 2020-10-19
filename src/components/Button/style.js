import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 40px;
  outline: none;
  width: ${props => (props.fullWidth ? "244px" : "")};
  margin-top: ${props => (props.fullWidth ? "20px" : "")};
  margin-bottom: ${props => (props.fullWidth ? "20px" : "")};

  &:hover {
    cursor: pointer;
  }
`;

export default StyledButton;

