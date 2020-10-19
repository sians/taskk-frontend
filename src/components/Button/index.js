import React from 'react';

import StyledButton from './style';

const Button = ({ 
    isDisabled,
    btnType,
    text,
    isSmall,
    action,
    type,
    isFullWidth,
    children  
 }) => {
    return (
        <StyledButton
            fullWidth={isFullWidth}
            btnType={btnType}
            disabled={isDisabled}
            small={isSmall}
            onClick={action}
            type={type}
        >
            {children}
            {text && <span>{text}</span>}
        </StyledButton>
    );
}

export default Button;