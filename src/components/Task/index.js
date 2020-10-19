import React, { useEffect, useState } from 'react';

import StyledTask, { HoverMenu } from './style';

const Task = ({ 
    task, 
    title, 
    isSelected, 
    setIsSelected, 
    lightColor, 
    darkColor 
}) => {
    const handleSelected = () => {
        if (task.id === isSelected) setIsSelected(null);            
        else setIsSelected(task.id);
    }

    const [selected, setSelected] = useState(isSelected === task.id)

    useEffect(() => {
        setSelected(isSelected === task.id)
    }, [isSelected])


    return (
        <StyledTask 
            onClick={handleSelected} 
            isSelected={selected}
            lightColor={lightColor}
            darkColor={darkColor}
            taskId={task.id}
        >
            <HoverMenu 
                selected={selected}
            >
            </HoverMenu>

            {/* wrap this in text component */}
            {title}            
            
        </StyledTask>
    )
}

export default Task;