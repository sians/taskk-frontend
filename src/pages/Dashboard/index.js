import React, { useEffect } from 'react';

import usePanels from '../../hooks/usePanels';
import useTasks from '../../hooks/useTasks';
import useAuth from '../../hooks/useAuth';

import Panel from '../../components/Panel';

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
    console.log(task)

    return (
        <DashboardContainer>
            {panels && Object.keys(panels).map((panel, index) => {
                return (
                    <Panel 
                        panel={panels[panel]}
                        key={`panel-${index}`}
                        totalNumPanels={Object.keys(panels).length}
                    />
                )
            })}
        </DashboardContainer>
    )
}

export default Dashboard;
