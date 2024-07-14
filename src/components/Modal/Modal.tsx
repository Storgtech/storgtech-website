import  { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Contacts } from "../../sections/Contacts";

const ModalComponent = ({ opt }: any = null) => {
    const [show, setShow] = useState(true);

    // const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Entre em contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Contacts prop={{ value: true }} opt={ opt } />
                </Modal.Body>
                <Modal.Footer>
                    <Button id={'modal-close'} variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalComponent;
