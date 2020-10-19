import React, { useEffect } from 'react';

import usePanels from '../../hooks/usePanels';
import useAuth from '../../hooks/useAuth';

import { PANELS } from '../../store/data';
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

    return (
        <DashboardContainer>
            {PANELS && PANELS.map((panel, index) => {
                return (
                    <Panel 
                        panel={panel}
                        key={`panel-${index}`}
                        totalNumPanels={PANELS.length}
                    />
                )
            })}
        </DashboardContainer>
    )
}

export default Dashboard;
