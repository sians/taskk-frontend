import React from 'react';

import StyledIconButton from './style';

const IconButton = ({ buttonType, lightColor, darkColor }) => {
    return (
        <StyledIconButton
            lightColor={lightColor}
            darkColor={darkColor}
        >
            +
        </StyledIconButton>
    )
}

export default IconButton;