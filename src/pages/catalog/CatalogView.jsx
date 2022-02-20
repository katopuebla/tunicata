import React from 'react';
import { Container, Row } from 'react-bootstrap';

const CatalogView = ({showCatalogos}) => (
    <Container className="container">
        <Row xs={2} md={4} lg={6} className="justify-content-md-center">
            {showCatalogos}
        </Row>
    </Container>
)

export default CatalogView;