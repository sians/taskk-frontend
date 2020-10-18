import React from 'react';

import StyledTask from './style';

const Task = ({ title }) => {
    return (
        <StyledTask>
            {title}
        </StyledTask>
    )
}

export default Task;