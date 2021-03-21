import React from 'react';
import { Modal, Row } from 'react-bootstrap';
import Product from '../product/product';

const CatalogView = ({showCatalogos, show, onClose, catalogId}) => (
    <React.Fragment>
        <Row xs={3} md={6} className="justify-content-md-center">{showCatalogos}</Row>
        <Modal show={show || false} onHide={onClose}>
            <Product _catalogId={catalogId} />
        </Modal>
    </React.Fragment>
)

export default CatalogView;