import styled from 'styled-components';

const styleSelected = (isSelected, lightColor, darkColor) => {
    if (isSelected) {
        return `
            color: ${lightColor};
            background-color: ${darkColor};
        `;
    }
}

const StyledTask = styled.div`
    padding: 8px 16px;
    ${props => styleSelected(props.isSelected, props.lightColor,props.darkColor)}
`;

export const HoverMenu = styled.div`
    height: ${props => props.selected ? '50px' : '0px'};
    transition: height 0.2s ease-out;
`;


export default StyledTask;