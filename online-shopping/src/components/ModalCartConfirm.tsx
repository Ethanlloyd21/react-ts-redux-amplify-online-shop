
import { Button, Modal } from "react-bootstrap";
import { clearCart } from "../redux/features/cart/cartSlice";
import { closeModal } from "../redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const ModalCartConfirm = () => {

    const { isOpen } = useAppSelector((state) => state.modal)
    const dispatch = useAppDispatch();

  return (

    <>
       <Modal show={isOpen} onHide={() => dispatch(closeModal())}>
        <Modal.Header closeButton>
          <Modal.Title>Please confirm!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button 
            variant="danger" 
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }
          }>
            Yes, I want to clear my cart!
          </Button>{" "}
          <Button variant="secondary" onClick={() => dispatch(closeModal())}>No, go back to my cart.</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCartConfirm;
