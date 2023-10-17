import { useState } from "react";

const useModal = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const [signupModalVisible, setSignupModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openSignupModal = () => {
    setSignupModalVisible(true);
  };

  const closeSignupModal = () => {
    setSignupModalVisible(false);
  };

  return {
    modalVisible,
    openModal,
    closeModal,
    signupModalVisible,
    openSignupModal,
    closeSignupModal,
  };
};

export default useModal;
