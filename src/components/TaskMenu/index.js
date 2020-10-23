import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons'

import IconButton from '../IconButton';

import StyledTaskMenu, { IconContainer } from './style';

const TaskMenu = ({ 
    isVisible,
    lightColor,
    darkColor
}) => {

    const iconNames = [faArchive, faCheck, faEdit];

    return (
        <StyledTaskMenu isVisible={isVisible}>

            {iconNames.map(name => {
                return (
                    <IconContainer>
                        <IconButton 
                            buttonType='square'
                            lightColor={lightColor}
                            icon={
                                <FontAwesomeIcon 
                                    icon={name} 
                                    color={darkColor}
                                    size='xs'
                                />
                            }
                        />
                    </IconContainer>
                )
            })}
        </StyledTaskMenu>
    )
}

export default TaskMenu;