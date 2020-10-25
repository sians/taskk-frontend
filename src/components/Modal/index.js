import React, { useEffect, useState } from "react";

import { Heading } from "../Text";

import { 
    StyledModal, 
    CloseContainer,
    ButtonSection,
    Inner
} from './style';

const Modal = ({
    title,
    isOpen,
    isLoading,
    data,
    modalType,
    onClose,
    onSuccess,
}) => {
    const [updateData, setUpdateData] = useState(null);

    const toggleModal = () => {
        onClose()
    }

    const handleSuccess = (e) => {
        onSuccess(e, updateData);
    }

    return (
        <StyledModal 
            ariaHideApp={false} 
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
        >
            <CloseContainer onClick={toggleModal}>
                
                x
            </CloseContainer>

            <Inner>
                <Heading size={2}>
                    settings
                </Heading>


            </Inner>


        </StyledModal>
    )
}

export default Modal;


