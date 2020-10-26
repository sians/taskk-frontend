import React, { useEffect, useState } from 'react';

import usePanels from '../../hooks/usePanels';
import useTasks from '../../hooks/useTasks';
import useAuth from '../../hooks/useAuth';

import Panel from '../../components/Panel';
import Modal from '../../components/Modal';

import DashboardContainer from './style';

const Dashboard = () => {
    const { user, gotoSignInPage } = useAuth();

    useEffect(() => {
        if (!user) {
            gotoSignInPage();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gotoSignInPage, user]);

    const { panels } = usePanels()
    const { task } = useTasks(2)

    const [isSelected, setIsSelected] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggleModal = (e) => {
        setModalIsOpen(!modalIsOpen);
      }    
    
      const renderModal = () => {
        return (
          <Modal
            isOpen={modalIsOpen}
            onClose={toggleModal}
            allowScroll={true}
          /> 
        )
      }          

    return (
        <>
            <DashboardContainer modalIsOpen={modalIsOpen}>
                    {panels && Object.keys(panels).map((panel, index) => {
                        return (
                            <Panel 
                                panel={panels[panel]}
                                key={`panel-${index}`}
                                totalNumPanels={Object.keys(panels).length}
                                isSelected={isSelected}
                                setIsSelected={setIsSelected}
                            />
                        )
                    })}

            </DashboardContainer>
            <div onClick={toggleModal}>clickme</div>
            {renderModal()}
        </>
    )
}

export default Dashboard;
