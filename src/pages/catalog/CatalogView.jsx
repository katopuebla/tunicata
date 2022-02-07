import React from 'react';
import { Row } from 'react-bootstrap';

const CatalogView = ({showCatalogos, show, onClose, catalogId}) => (
    <React.Fragment>
        <Row xs={2} md={4} lg={6} className="justify-content-md-center">
            {showCatalogos}
        </Row>
    </React.Fragment>
)

export default CatalogView;