import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faCheck, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'

import IconButton from '../IconButton';

import StyledTaskMenu, { IconContainer } from './style';

const TaskMenu = ({ 
    task,
    isVisible,
    lightColor,
    darkColor,
    updateTask
}) => {
    const [complete, setComplete] = useState(
        task?.attributes?.complete || false)
    const [title, setTitle] = useState(
        task?.attributes?.title || '')
    const [archived, setArchived] = useState(
        task?.attributes?.archived || false)

    const menuItems = [
        {
            icon: complete ? faTimes : faCheck,
            action: () => handleUpdateIsComplete
        },
        {
            icon: faEdit,
            action: () => handleUpdateTitle
        },
        {
            icon: faArchive,
            action: () => handleUpdateIsArchived
        }
    ];

    const handleUpdateIsComplete = () => {
        const payload = {complete: !complete}
        updateTask(task?.id, payload)
        setComplete(!complete)
    }
    const handleUpdateTitle = () => {
        console.log(' new title')
    }
    const handleUpdateIsArchived = () => {
        console.log(' archive dat shit')
    }
    

    return (
        <StyledTaskMenu isVisible={isVisible}>

            {menuItems.map(item => {
                return (
                    <IconContainer>
                        <IconButton 
                            buttonType='square'
                            lightColor={darkColor}
                            action={item.action()}
                            icon={
                                <FontAwesomeIcon 
                                    icon={item.icon} 
                                    color={lightColor}
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