import styled from 'styled-components';

const StyledTaskMenu = styled.div`
    opacity: ${props => props.isVisible ? '1' : '0'};
    transition: opacity 0.1s linear;
    color: ${props => props.color};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 5px;
`;

export const IconContainer = styled.div`
    margin-left: 10px;
`;

export default StyledTaskMenu;
