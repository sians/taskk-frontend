import React, { useState } from 'react';

import useColorthemes from '../../hooks/useColorthemes';

import Task from '../../components/Task';
import IconButton from '../../components/IconButton';

import StyledPanel, { Header, Heading, Dragbar } from './style';

const Panel = ({ panel, totalNumPanels }) => {
    const [isSelected, setIsSelected] = useState(null);
    
    const taskRelations = panel?.relationships?.tasks?.data

    const { colortheme } = useColorthemes(panel?.relationships?.colortheme?.data?.id)
    const primaryColor = colortheme?.attributes?.primaryColor;
    const secondaryColor = colortheme?.attributes?.secondaryColor;
    console.log(colortheme, 'total num pa?', totalNumPanels)

    return (
        <StyledPanel 
            background={secondaryColor}
            color={primaryColor}
            totalNumPanels={totalNumPanels}
        >
            <Dragbar 
                darkColor={primaryColor}
            />
            <Header>
                <Heading>{panel?.attributes?.title}</Heading>
                <IconButton
                    lightColor={secondaryColor}
                    darkColor={primaryColor}
                />
            </Header>
            {taskRelations && taskRelations.map((task, index) => {
                return (
                    <Task 
                        taskId={task.id}
                        key={`task-${index}`}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                        lightColor={secondaryColor}
                        darkColor={primaryColor}
                    />
                )
            })}
        </StyledPanel>
    )
}

export default Panel;
