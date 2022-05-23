import React from 'react';
import { Card, Button, Col, Image } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

const CardCatalog = ({ catalog, onShowCatalog, imageHeight }) => (

    <Col>
        <Card >
            <Button variant="link" type="button" className="justify-content-center" onClick={() => { onShowCatalog(catalog); }}>
                <Image variant="top" src={catalog.url}
                    style={{ width: 'auto', height: typeof imageHeight !== 'undefined' ? imageHeight : '100' }} />
            </Button>
            <Card.Body>
                <Card.Title>{catalog.title}</Card.Title>
                <p>
                    <NumberFormat
                        thousandSeparator={true}
                        prefix={"$ "}
                        value={catalog.price}
                        displayType={"text"}
                        suffix={" MXN"}
                        style={{ color: "purple" }}
                    />
                </p>
            </Card.Body>
        </Card>
    </Col>
)

export default CardCatalog;