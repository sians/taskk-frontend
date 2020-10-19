import React from 'react';

import usePanels from '../../hooks/usePanels';

import { PANELS } from '../../store/data';
import Panel from '../../components/Panel';

import DashboardContainer from './style';

const Dashboard = () => {
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
