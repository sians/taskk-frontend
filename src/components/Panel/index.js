import React from 'react';

import { TASKS } from '../../store/data';

import Task from '../../components/Task';

import StyledPanel from './style';

const Panel = ({ panel, totalNumPanels }) => {
    const tasks = TASKS.filter(task => task.panelId === panel.id)
    
    return (
        <StyledPanel 
            background={panel.lightColor}
            color={panel.darkColor}
            totalNumPanels={totalNumPanels}
        >
            <h3>{panel.title}</h3>
            {tasks && tasks.map((task, index) => {
                return (
                    <Task 
                        title={task.title}
                        key={`task-${index}`}
                    />
                )
            })}
        </StyledPanel>
    )
}

export default Panel;
