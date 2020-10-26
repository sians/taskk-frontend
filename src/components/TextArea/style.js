import styled from "styled-components";

// export const TextAreaContainer = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: flex-start;
//   color: ${props =>
//     props.error
//       ? 'red'
//       : 'black'};
//   > p {
//     margin: 16px 0;
//   }
// `;

// const TextArea = styled.textarea`
//   border-radius: 2px;
//   resize: none;
//   padding: 8px;
//   border: none;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   line-height: 24px;
//   color: black;
//   outline: none;
//   &:focus {
//     outline: none;
//     border-radius: 2px;
//     border-color: ${(props) =>
//       props.error
//         ? 'red'
//         : 'black'};
//   }
//   &:disabled {
//     background-color: white;
//     color: black;
//   }
// `;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  width: 80%;
  margin: 20px 0px;
  border-radius: 10px;



  color: ${props =>
    props.error
      ? 'red'
      : 'black'};
  > p {
    margin: 16px 0;
  }
`;

const TextArea = styled.textarea`
  background-color: ${props => props.background};
  border-radius: 4px;

  resize: none;
  padding: 8px;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.color};
  outline: none;


  box-shadow: 4px 4px 8px 1px rgba(0,0,0,0.25) inset, 
    -3px -3px 8px 1px rgba(255,255,255,0.15) inset,
    -1px -1px 2px 1px rgba(255,255,255,0.05) inset;

    background: linear-gradient(
      -35deg, 
      rgba(0,0,0,0.05), 
      rgba(255,255,255,0.05));    

  &::placeholder {
    color: ${props => props.color};
    opacity: 0.7;
    font-style: italic;
    
  }

  &:focus {
    outline: none;
    border-radius: 4px;
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
