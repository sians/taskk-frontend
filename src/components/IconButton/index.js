import React from 'react';

import StyledIconButton from './style';

const IconButton = ({ buttonType, lightColor, darkColor, action }) => {
    return (
        <StyledIconButton
            lightColor={lightColor}
            darkColor={darkColor}
            onClick={action}
        >
            +
        </StyledIconButton>
    )
}

export default IconButton;