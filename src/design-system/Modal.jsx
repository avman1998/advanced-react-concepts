import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: #00000067;
`;

const ModalContent = styled.div`
  width: 50%;
  padding: 24px;
  margin: 12% auto;
  background-color: wheat;
`;

const Modal = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <button onClick={() => setIsShow(true)}>Show Modal</button>
      {isShow && (
        <ModalBackground onClick={() => setIsShow(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsShow(false)}>Hide modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
