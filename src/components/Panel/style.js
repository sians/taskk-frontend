import styled from 'styled-components';

const StyledPanel = styled.div`
    background-color: ${props => props.background};
    color: ${props => props.color};
    width: ${props => 100 / props.totalNumPanels}%;
    padding: 0px;
`;

export const Dragbar = styled.div`
    height: ${props => props.menuIsOpen ? '50px' : '10px'};
    background-color: ${props => props.darkColor};

    transition: height 0.3s ease-out;
`;

export const ExpandMenu = styled.div`
    height: 20px;
    width: 20px;
    background-color: ${props => props.background};
    color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Heading = styled.div`
    display: block;
    padding: 16px;
    font-weight: bold;
    font-size: 32px;
    text-align: center;
`;

export default StyledPanel;