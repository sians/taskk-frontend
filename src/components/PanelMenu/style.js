import styled from 'styled-components';

const StyledPanelMenu = styled.div`
    color: ${props => props.color};
    opacity: ${props => props.menuIsOpen ? '1' : '0'};
    transition: opacity 0.3s linear;
`;

export default StyledPanelMenu;