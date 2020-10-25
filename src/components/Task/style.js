import styled from 'styled-components';

const styleSelected = (isSelected, lightColor, darkColor) => {
    if (isSelected) {
        return `
            color: ${lightColor};
            background-color: ${darkColor};
            box-shadow: 6px 6px 10px 2px rgba(0,0,0,0.2);
        `;
    }
}

const StyledTask = styled.div`
    padding: 8px 16px;
    ${props => styleSelected(props.isSelected, props.lightColor,props.darkColor)}
    text-decoration: ${props => props.complete && 'line-through'};
`;

export const HoverMenu = styled.div`
    height: ${props => props.selected ? '50px' : '0px'};
    display: ${props => props.selected ? 'block' : 'none'};

    transition: height 0.2s ease-out;
    transition: display 0.2s ease-out;
`;


export default StyledTask;