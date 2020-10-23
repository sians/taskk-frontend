import React, { useState } from 'react';

import useColorthemes from '../../hooks/useColorthemes';

import Task from '../../components/Task';
import IconButton from '../../components/IconButton';
import PanelMenu from '../../components/PanelMenu';

import StyledPanel, { Header, Heading, Dragbar, ExpandMenu } from './style';

const Panel = ({ panel, totalNumPanels }) => {
    const [isSelected, setIsSelected] = useState(null);
    
    const taskRelations = panel?.relationships?.tasks?.data

    const { colortheme } = useColorthemes(panel?.relationships?.colortheme?.data?.id)
    const primaryColor = colortheme?.attributes?.primaryColor;
    const secondaryColor = colortheme?.attributes?.secondaryColor;

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <StyledPanel 
            background={secondaryColor}
            color={primaryColor}
            totalNumPanels={totalNumPanels}
        >
            <Dragbar 
                darkColor={primaryColor}
                menuIsOpen={menuIsOpen}
            >
                <PanelMenu 
                    menuIsOpen={menuIsOpen}
                    color={secondaryColor}
                />
            </Dragbar>
            <Header>
                <ExpandMenu 
                    background={primaryColor}
                    color={secondaryColor}
                    onClick={toggleMenu}
                >
                    {menuIsOpen
                    ?
                        <span>-</span>
                    :
                        <span>+</span>
                    }
                </ExpandMenu>
                <Heading>{panel?.attributes?.title}</Heading>
                {/* <IconButton
                    lightColor={secondaryColor}
                    darkColor={primaryColor}
                    action={toggleMenu}
                /> */}
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
