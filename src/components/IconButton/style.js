import styled from 'styled-components';


const getStylesFromType = (type, theme) => {
    switch (type) {
        case 'round':
            return `
                border: 1px solid ${props => props.darkColor};
                border-radius: 50px;
            `
        case 'square':
            break;
        default:
            break;
    }
}


const StyledIconButton = styled.div`
    background-color: ${props => props.lightColor};
    z-index: 1;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    cursor: pointer;
    -webkit-box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.15);
    -moz-box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.15);
    box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.15);
    ${props => getStylesFromType(props.buttonType, props.theme)}

    path {
        fill: ${props => props.darkColor};
    }
`;

export default StyledIconButton;

