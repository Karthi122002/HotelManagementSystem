import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import React from "react";
function MyModal(props) {
  const { title, body, view, handleClose ,} = props;

  return (
    <div>
      <Modal show={view} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Save
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default MyModal;