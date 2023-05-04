
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/features/cart/cartSlice";
import { closeModal } from "../redux/features/modal/modalSlice";

const ModalCartConfirm = () => {

    const { isOpen } = useSelector((state: any) => state.modal)
    const dispath = useDispatch();

  return (

    <>
       <Modal show={isOpen} onHide={() => dispath(closeModal())}>
        <Modal.Header closeButton>
          <Modal.Title>Please confirm!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button 
            variant="danger" 
            onClick={() => {
              dispath(clearCart());
              dispath(closeModal());
            }
          }>
            Yes, I want to clear my cart!
          </Button>{" "}
          <Button variant="secondary" onClick={() => dispath(closeModal())}>No, go back to my cart.</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCartConfirm;
