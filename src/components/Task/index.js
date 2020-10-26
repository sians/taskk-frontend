import React, { useEffect, useState } from 'react';

import useTasks from '../../hooks/useTasks';

import TaskMenu from '../TaskMenu';
import StyledTask, { HoverMenu } from './style';

const Task = ({ 
    taskId, 
    isSelected, 
    setIsSelected, 
    lightColor, 
    darkColor 
}) => {
    const { 
        task,
        updateTaskLoading,
        updateTaskSuccess,
        updateTaskError,
        updateTask        
    } = useTasks(taskId)

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
            lightColor={darkColor}
            darkColor={lightColor}
            taskId={taskId}
            complete={task?.attributes?.complete}
        >


            {/* wrap this in text component */}
            <span>{task?.attributes?.title}</span>

            <HoverMenu 
                selected={selected}
            >
                <TaskMenu
                    task={task}
                    isVisible={selected}
                    lightColor={lightColor}
                    darkColor={darkColor}
                    updateTask={updateTask}
                >

                </TaskMenu>
            </HoverMenu>
        </StyledTask>
    )
}

export default Task;