import styled from "styled-components";

import Modal from 'styled-react-modal';

export const CloseContainer = styled.div`
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
`;

export const StyledModal = Modal.styled`
    background-color: rgb(255 255 255 / 60%);
    box-shadow: 0px 0px 50px #272727;
    box-shadow: 0px 0px 30px #27272759;
    color: ${props => props.theme.colors.modal.offwhite};
    color: white;
    height: 40vh;
    width: 40vw;
    max-width: 600px;
    padding: 30px;
    position: relative;
    overflow-y: scroll;

    margin-top: -100px;
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
    background-color: ${props => props.theme.colors.modal.darkGrey};
    background-color: rgb(220 219 222 / 10%);
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
    text-shadow: 3px 2px 5px #2d2d2d;
    text-shadow: none;
    
`;