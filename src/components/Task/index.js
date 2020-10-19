import React, { useEffect, useState } from 'react';

import useTasks from '../../hooks/useTasks';

import StyledTask, { HoverMenu } from './style';

const Task = ({ 
    taskId, 
    isSelected, 
    setIsSelected, 
    lightColor, 
    darkColor 
}) => {
    const { task } = useTasks(taskId)

    const handleSelected = () => {
        if (taskId === isSelected) setIsSelected(null);            
        else setIsSelected(taskId);
    }

    const [selected, setSelected] = useState(isSelected === taskId)

    useEffect(() => {
        setSelected(isSelected === taskId)
    }, [isSelected])

    return (
        <StyledTask 
            onClick={handleSelected} 
            isSelected={selected}
            lightColor={lightColor}
            darkColor={darkColor}
            taskId={taskId}
        >
            <HoverMenu 
                selected={selected}
            >
            </HoverMenu>

            {/* wrap this in text component */}
            {task?.attributes?.title} 
            
        </StyledTask>
    )
}

export default Task;