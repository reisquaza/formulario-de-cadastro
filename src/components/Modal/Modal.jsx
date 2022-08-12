import { ContainerModal } from "../../styles/container";
import { MdClose } from "react-icons/md";
import { ModalBox, ModalTitle } from "./style";
import { useEffect, useRef } from "react";

const Modal = ({ children, title, setIs, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIs(false);
      }
    };

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setIs]);

  return (
    <ContainerModal>
      <ModalBox ref={modalRef}>
        <ModalTitle>
          <h3>{title}</h3>
          <button onClick={closeModal}>
            <MdClose />
          </button>
        </ModalTitle>
        {children}
      </ModalBox>
    </ContainerModal>
  );
};

export default Modal;
