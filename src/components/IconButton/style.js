import styled from 'styled-components';

const StyledIconButton = styled.div`
    font-size: 28px;
    border: 1px solid ${props => props.darkColor};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    cursor: pointer;
    -webkit-box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.15);
    -moz-box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.15);
    box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.15);
`;

export default StyledIconButton;

