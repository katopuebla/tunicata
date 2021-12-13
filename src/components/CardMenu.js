import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const imageMain = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata.jpg?alt=media&token=06ef0868-51b0-42b1-a7b9-1bf819e4b813"

const CardMenu = ({ item, index, onCatalogClick, isMobile }) => (
    <Col xs={isMobile ? 6 : 2}>
        <Card key={index}>
		<Button variant="link" type="button" onClick={() => onCatalogClick(item.collection)}>
                <Card.Img ariant="top" src={ item.url } />
            </Button>
            <Card.Body>
			<Card.Title>{item.collection}</Card.Title>
            </Card.Body>
        </Card>
    </Col>
)

export default CardMenu;