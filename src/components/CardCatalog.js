import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

const CardCatalog = ({ catalog, onShowCatalog }) => (
    <Col xs={3}>
        <Card>
            <Button variant="link" type="button" onClick={() => { onShowCatalog(catalog); }}>
                <Card.Img ariant="top" src={catalog.url} />
            </Button>
            <Card.Body>
                <Card.Title>{catalog.title}</Card.Title>
                {/* <b> */}
                <NumberFormat
                    thousandSeparator={true}
                    prefix={"$ "}
                    value={catalog.price}
                    displayType={"text"}
                    suffix={" MXN"}
                    style={{ color: "purple" }}
                />
                {/* </b> */}
            </Card.Body>
        </Card>
    </Col>
)

export default CardCatalog;