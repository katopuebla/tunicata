import React from 'react';
import { Modal, Form, Col, Row } from 'react-bootstrap';

const AddProductView = ({ showAdd, handleClose, handleSave, handleFile, setItem }) => {
    return (
        <div>
            <Modal show={showAdd} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Agregando Productos</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group as={Row} controlId='collection'>
                            <Form.Label column sm="2"> Colección</Form.Label>
                            <Col sm="10"><Form.Control onChange={setItem} /></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='type'>
                            <Form.Label column sm="2"> Diseño</Form.Label>
                            <Col sm="10">
                                <Form.Control onChange={setItem} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='description'>
                            <Form.Label column sm="2"> description</Form.Label>
                            <Col sm="10">
                                <Form.Control onChange={setItem} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='price'>
                            <Form.Label column sm="2"> price</Form.Label>
                            <Col sm="10">
                                <Form.Control onChange={setItem} />
                            </Col>
                        </Form.Group>
                        <Form.Group >
                            <Form.File id="name" type="file" label="nombre" onChange={handleFile} />
                        </Form.Group>
                        <b>Talla</b>
                        {/* <blockquote>{sizes}</blockquote> */}

                        <div className="card-footer">
                            <button className="btn btn-secundary" >Cerrar</button>
                            <button className="btn btn-primary" onClick={handleSave}>Agregar</button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AddProductView;