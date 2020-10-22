import React, { useState } from 'react';

import useColorthemes from '../../hooks/useColorthemes';

import Task from '../../components/Task';
import IconButton from '../../components/IconButton';
import Modal from '../../components/Modal';
import PanelMenu from '../../components/PanelMenu';

import StyledPanel, { Header, Heading, Dragbar } from './style';

const Panel = ({ panel, totalNumPanels }) => {
    const [isSelected, setIsSelected] = useState(null);
    
    const taskRelations = panel?.relationships?.tasks?.data

    const { colortheme } = useColorthemes(panel?.relationships?.colortheme?.data?.id)
    const primaryColor = colortheme?.attributes?.primaryColor;
    const secondaryColor = colortheme?.attributes?.secondaryColor;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalOpen = (e) => {
      setModalIsOpen(!modalIsOpen);
    }    
    const renderModal = () => {
        return (
          <Modal
            isOpen={modalIsOpen}
            onClose={handleModalOpen}
            allowScroll={true}
          /> 
        )
      }

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
                onClick={toggleMenu}
            >
                <PanelMenu 
                    menuIsOpen={menuIsOpen}
                    color={secondaryColor}
                />
            </Dragbar>
            <Header>
                <Heading>{panel?.attributes?.title}</Heading>
                <IconButton
                    lightColor={secondaryColor}
                    darkColor={primaryColor}
                    action={handleModalOpen}
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
            {renderModal()}
        </StyledPanel>
    )
}

export default Panel;
