import React, { useContext, useState } from 'react';
import { Modal, Form, Col, Row, Button } from 'react-bootstrap';
import { GeneralContext } from '../../contexts/generalContext';
import LoadingSpinner from '../../components/loadingSpinner';
import ReactMde from "react-mde";
import 'react-mde/lib/styles/css/react-mde-all.css';
import * as Showdown from "showdown";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const AddProductView = ({ form, showAdd, handleClose, handleSave, handleFile
    , setItem, handleValueChange, showOption, AlertAddProduct, validated }) => {
    const { setLoading } = useContext(GeneralContext);
    const [selectedTab, setSelectedTab] = useState("write");
    return (
        <div>
            <Modal show={showAdd} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Agregando Productos</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <AlertAddProduct />
                    <Form noValidate validated={validated} onSubmit={handleSave} >
                        <Form.Group as={Row} controlId="collection">
                            <Form.Label column sm="2">Colección</Form.Label>
                            <Col sm="10">
                                <Form.Select defaultValue="Seleccionar..." onChange={setItem} required>
                                    <option value=''>Seleccionar...</option>
                                    {showOption}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='title'>
                            <Form.Label column sm="2"> Diseño</Form.Label>
                            <Col sm="10">
                                <Form.Control onChange={setItem} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='description'>
                            <Form.Label column sm="2"> Descripción</Form.Label>
                            <Col sm="10">
                                {/*<Form.Control onChange={setItem} required />*/}
                                <ReactMde
                                    value={form.description}
                                    onChange={handleValueChange}
                                    selectedTab={selectedTab}
                                    onTabChange={setSelectedTab}
                                    generateMarkdownPreview={markdown =>
                                        Promise.resolve(converter.makeHtml(markdown))
                                    }
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='price'>
                            <Form.Label column sm="2"> precio</Form.Label>
                            <Col sm="10">
                                <Form.Control onChange={setItem} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='files'>
                            <Form.Control type="file" multiple label="files" onChange={handleFile} size="sm" required />
                        </Form.Group>
                        {/* <b>Talla</b> */}
                        {/* <blockquote>{sizes}</blockquote> */}

                        <div className="card-footer">
                            <Button type="submit" onClick={() => { if (validated) {setLoading(true) }}}>
                                <LoadingSpinner name={'Agregar'} />
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AddProductView;