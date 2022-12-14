import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const value = {
    showModal,
    toggleModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

ModalContext.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalProvider;
