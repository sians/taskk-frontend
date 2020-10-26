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

export const AddTask = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    font-size: 60px;
    font-weight: bold;
    cursor: pointer;

    span {
        text-shadow: 2px 2px 3px rgba(0,0,0,0.45),
            4px 4px 8px rgba(0,0,0,0.15),
            -2px -2px 8px rgba(255,255,255,0.15),
            -1px -1px 2px rgba(255,255,255,0.15); 
        color: ${props => props.background};     
        padding-bottom: 10px;   
    }  
`;

export default StyledPanel;


// background-image: linear-gradient(
//     -45deg, 
//     rgba(0,0,0,0.22), 
//     rgba(255,255,255,0.25));
// background-image: linear-gradient(
//     -45deg, 
//     rgba(255,255,255,0.15), 
//     rgba(0,0,0,0.15));  
// -webkit-background-clip: text;
// -moz-background-clip: text;
// -webkit-text-fill-color: transparent; 
// -moz-text-fill-color: transparent;