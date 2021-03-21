import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const CardMenu = ({ item, onCatalogClick }) => (
    <Col xs={3}>
        <Card >
            <Button variant="link" type="button" onClick={() => onCatalogClick(item.collection)}>
                <Card.Img ariant="top" src={item.detail[0].url} />
            </Button>
            <Card.Body>
                <Card.Title>{item.collection}</Card.Title>
            </Card.Body>
        </Card>
    </Col>
)

export default CardMenu;