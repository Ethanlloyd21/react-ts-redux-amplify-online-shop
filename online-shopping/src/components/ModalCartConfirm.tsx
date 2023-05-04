import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/features/cart/cartSlice";


interface VerticalModalProps {
  show: boolean;
  handleClose: () => void;
}

const ModalCartConfirm: React.FC<VerticalModalProps> = ({
  show,
  handleClose,
}) => {

    const dispath = useDispatch();

  return (

    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please confirm!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button 
            variant="danger" 
            onClick={() => {
              dispath(clearCart());
              handleClose();
            }
          }>
            Yes, I want to clear my cart!
          </Button>{" "}
          <Button variant="secondary" onClick={handleClose}>No, go back to my cart.</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCartConfirm;
