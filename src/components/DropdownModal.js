import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DropDownElement from './DropDownElement';
import FileUpload from './FileUpload';
import Form from './Form';
function DropdownModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Additional Info
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><div>
                    //Calling Form From Here
                    <Form />
                </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DropdownModal;