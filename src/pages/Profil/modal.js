import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export const ModalComponent = ({
  showModal,
  onHandleModal,
  onBtnSuccess,
  onBtnCancel,
  mainBtnLabel,
  modalTitle,
  modalBody,
  successBtnLabel,
  cancelBtnLabel,
}) => (
  <div>
    <Button color="danger" onClick={onHandleModal}>
      {mainBtnLabel}
    </Button>

    <Modal isOpen={showModal} toggle={onHandleModal}>
      <ModalHeader toggle={onHandleModal}>{modalTitle}</ModalHeader>

      <ModalBody>{modalBody}</ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={onBtnSuccess}>
          {successBtnLabel}
        </Button>{" "}
        <Button color="secondary" onClick={onBtnCancel}>
          {cancelBtnLabel}
        </Button>
      </ModalFooter>
    </Modal>
  </div>
);

ModalComponent.propTypes = {
  mainBtnLabel: PropTypes.string,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.string,
  successBtnLabel: PropTypes.string,
  cancelBtnLabel: PropTypes.string,
};

ModalComponent.defaultProps = {
  mainBtnLabel: "",
  modalTitle: "",
  modalBody: "",
  successBtnLabel: "",
  cancelBtnLabel: "",
};
