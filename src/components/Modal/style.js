import styled from "styled-components";

import Modal from 'styled-react-modal';

export const CloseContainer = styled.div`
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
`;

export const StyledModal = Modal.styled`
    background-color: white;
    border-radius: 16px;
    min-height: 350px;
    max-height: 75vh;
    min-width: 300px;
    max-width: 760px;
    padding: 30px;
    position: relative;
    overflow-y: scroll;
`;

export const ButtonSection = styled.div`
    display: flex;
    position: absolute;
    bottom: 30px;
    width: calc(100% - 60px);

    button:first-child {
        margin-right: 16px;
    }
`;

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.backdrop};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const IconDetails = styled.div`
    display: flex;
    margin-top: 24px;    
`;

export const Inner = styled.div`
`;