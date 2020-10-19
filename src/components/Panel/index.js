import React, { useState } from 'react';

import { TASKS } from '../../store/data';

import Task from '../../components/Task';
import IconButton from '../../components/IconButton';

import StyledPanel, { Header, Heading, Dragbar } from './style';

const Panel = ({ panel, totalNumPanels }) => {
    const tasks = TASKS.filter(task => task.panelId === panel.id)

    const [isSelected, setIsSelected] = useState(null);

    console.log(isSelected, 'selected')
    return (
        <StyledPanel 
            background={panel.lightColor}
            color={panel.darkColor}
            totalNumPanels={totalNumPanels}
        >
            <Dragbar 
                darkColor={panel.darkColor}
            />
            <Header>
                <Heading>{panel.title}</Heading>
                <IconButton
                    lightColor={panel.lightColor}
                    darkColor={panel.darkColor}
                />
            </Header>
            {tasks && tasks.map((task, index) => {
                return (
                    <Task 
                        task={task}
                        title={task.title}
                        key={`task-${index}`}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                        lightColor={panel.lightColor}
                        darkColor={panel.darkColor}
                    />
                )
            })}
        </StyledPanel>
    )
}

export default Panel;
