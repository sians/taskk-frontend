import React from 'react';
import PropTypes from "prop-types";

import StyledIconButton from './style';

const IconButton = ({ 
    buttonType, 
    lightColor, 
    darkColor,
    icon,
    action 
}) => {
    return (
        <StyledIconButton
            buttonType={buttonType}
            lightColor={lightColor}
            darkColor={darkColor}
            onClick={action}
        >
            {icon}
        </StyledIconButton>
    )
}

export default IconButton;

IconButton.propTypes = {
    buttonType: PropTypes.oneOf(['round', 'square']),
    lightColor: PropTypes.string,
    darkColor: PropTypes.string,
    action: PropTypes.func
};