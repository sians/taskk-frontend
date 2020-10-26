import styled from 'styled-components';


const getStylesFromType = (type, theme) => {
    switch (type) {
        case 'round':
            return `
                border: 1px solid ${props => props.darkColor};
                border-radius: 50px;
            `
        case 'square':
            return `
                border-radius: 8px;
            `
        default:
            break;
    }
}

const getSize = (size) => {
    switch (size) {
        case 'large':
            return `
                height: 64px;
                width: 64px;
                border-radius: 18px;
            `
        default:
            return `
                height: 32px;
                width: 32px;
        `
    }
}

// const StyledIconButton = styled.div`
//     background-color: ${props => props.lightColor};
//     z-index: 1;
//     font-size: 28px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 32px;
//     width: 32px;
//     cursor: pointer;
//     -webkit-box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.15);
//     -moz-box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.15);
//     box-shadow: 3px 3px 10px 2px rgba(0,0,0,0.15);
//     ${props => getStylesFromType(props.buttonType, props.theme)}

//     path {
//         fill: ${props => props.darkColor};
//     }
// `;

// const StyledIconButton = styled.div`
//     background-color: ${props => props.lightColor};
//     z-index: 1;
//     font-size: 28px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 32px;
//     width: 32px;
//     cursor: pointer;
//     box-shadow: 8px 8px 15px 3px rgba(0,0,0,0.15), 
//         4px 4px 4px 1px rgba(106,27,207,0.15), 
//         -6px -6px 25px 2px rgba(255,255,255,0.45);

//     ${props => getStylesFromType(props.buttonType, props.theme)}

//     path {
//         fill: ${props => props.darkColor};
//     }

//     &:hover {
//         box-shadow: -3px -3px 10px 1px rgba(0,0,0,0.18) inset,
//         4px 4px 10px 6px rgba(255,255,255,0.25) inset
//         ;        
//     }
// `;

const StyledIconButton = styled.div`
    background-color: ${props => props.lightColor};
    z-index: 1;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 8px 8px 15px 3px rgba(0,0,0,0.25),
        4px 4px 4px 1px rgba(0,0,0,0.05),
        -2px -2px 40px 1px rgba(255,255,255,0.15);
    background: linear-gradient(
        -45deg, 
        rgba(0,0,0,0.22), 
        rgba(255,255,255,0.25));
    background: linear-gradient(
        -45deg, 
        rgba(255,255,255,0.15), 
        rgba(0,0,0,0.15));

    ${props => getStylesFromType(props.buttonType, props.theme)}
    ${props => getSize(props.size)}

    path {
        fill: ${props => props.darkColor};
    }

    &:hover {
        box-shadow: -3px -3px 10px 1px rgba(0,0,0,0.15) inset,
        -1px -1px 10px 1px rgba(0,0,0,0.15) inset,
        -5px -5px 15px 1px rgba(255,255,255,0.035);        
    }
`;

export default StyledIconButton;

