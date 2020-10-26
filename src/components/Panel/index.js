import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import useColorthemes from '../../hooks/useColorthemes';

import Task from '../../components/Task';
import IconButton from '../../components/IconButton';
import PanelMenu from '../../components/PanelMenu';
import TextArea from '../TextArea';


import StyledPanel, { 
    Header, 
    Heading, 
    Dragbar, 
    ExpandMenu,
    AddTask
} from './style';

const Panel = ({ panel, totalNumPanels, isSelected, setIsSelected }) => {    
    const taskRelations = panel?.relationships?.tasks?.data

    const { colortheme } = useColorthemes(panel?.relationships?.colortheme?.data?.id)
    const primaryColor = colortheme?.attributes?.secondaryColor;
    const secondaryColor = colortheme?.attributes?.primaryColor;
    
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    const resetSelected = () => {
        setIsSelected(null);
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
            </Header>

            <AddTask background={secondaryColor}>
                <TextArea 
                    background={secondaryColor}
                    color={primaryColor}
                    placeholder='soon i am gong to '
                    onFocus={resetSelected}
                />
                <span>+</span> 

            </AddTask>

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
