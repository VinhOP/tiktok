import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

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
    <ModalContext.Provider value={value}>
      <>{children}</>
    </ModalContext.Provider>
  );
}

export default ModalProvider;
