import react, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

export const ModalComp = (props) => {
  const navigate = useNavigate();
  const setModalVisible = props.setModalVisible;
  const modalVisible = props.modalVisible;
  const handleOk2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
    navigate(`/dashboard`);
  };
  const handleCancel2 = () => {
    setModalVisible(false);
  };
  return (
    <Modal
      visible={modalVisible}
      onOk={handleOk2}
      onCancel={handleCancel2}
      style={{ backgroundColor: "#2ECC71", borderRadius: "1em" }}
    >
      <Title level={3}>OK..!</Title>
      <Text>The data has been successfully stored</Text>
      <br />
      <Text>Click Ok to Finish the Inspection</Text>
      <br />
      <Text>Click cancel if you whant to upload some Images</Text>
    </Modal>
  );
};
