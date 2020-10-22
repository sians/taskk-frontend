import React, { useState } from 'react';

import useColorthemes from '../../hooks/useColorthemes';

import Task from '../../components/Task';
import IconButton from '../../components/IconButton';
import Modal from '../../components/Modal';

import StyledPanelMenu from './style';

const PanelMenu = ({ menuIsOpen, color }) => {
    return (
        <StyledPanelMenu 
            menuIsOpen={menuIsOpen}
            color={color}
        >
            <div>mennnuuuuu</div>
        </StyledPanelMenu>
    )
}

export default PanelMenu;