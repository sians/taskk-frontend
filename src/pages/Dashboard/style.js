import styled from 'styled-components';

const DashboardContainer = styled.div`
    display: flex;
    width: 100vw;
    height: calc(100vh - 50px);

    ${props => props.modalIsOpen ? 'filter: blur(5px)' : ''};
    transition: filter 0.2s;
`;

export default DashboardContainer;