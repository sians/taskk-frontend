import styled from 'styled-components';

const StyledPanel = styled.div`
    background-color: ${props => props.background};
    color: ${props => props.color};
    width: ${props => 100 / props.totalNumPanels}%;
    padding: 16px;
`;

export default StyledPanel;