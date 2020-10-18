import React from 'react';

import { PANELS } from '../../store/data';
import Panel from '../../components/Panel';

import DashboardContainer from './style';

const Dashboard = () => {
    return (
        <DashboardContainer>
            {PANELS && PANELS.map((panel, index) => {
                console.log('dash', panel)
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
