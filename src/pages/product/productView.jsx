import React, { useContext } from 'react';
import { Modal, Button, Card, Col, Row, Carousel } from 'react-bootstrap';
import AlertProduct from '../../components/AlertProduct';
import FooterProduct from '../../components/FooterProduct';
import { ProductContext } from '../../contexts/productContext';
import ProductDetail from './productDetail';

const ProductView = ({ onSubmit, onSelectImageUrl, renderEdit, onCloseEdit, showDelete, setShowDelete, handleDelete, isMobile }) => {
    const { productDetail, urlImage } = useContext(ProductContext);
    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <Card fluid>
                    <Card.Title>{productDetail.title}</Card.Title>
                    <Card.Body>
                        <AlertProduct />
                        <Row className="justify-content-md-center">
                            <Col md={6}>
                                {isMobile ? (
                                    <Row>
                                        <Col sm={8}>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <Card.Img src={urlImage} width="30%" height="auto" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Card.Img src={urlImage} width="30%" height="auto" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                    </Row>
                                ) : (
                                    <Row>
                                        <Col md={2}>
                                            <Card.Img width="1%" height="auto"
                                                src={productDetail.url}
                                                className="img"
                                                onClick={() => onSelectImageUrl(productDetail.url)}
                                            />
                                            <Card.Img width="1%" height="auto"
                                                src={productDetail.url}
                                                className="img"
                                                onClick={() => onSelectImageUrl(productDetail.url)}
                                            />
                                        </Col>
                                        <Col xs md={8}>
                                            <Card.Img src={urlImage} width="20%" height="auto" />
                                        </Col>
                                    </Row>
                                )}

                            </Col>
                            <Col md={6}>
                                <Card.Text>
                                    <ProductDetail />
                                    <br />
                                    <b>Talla</b>
                                    {/*<blockquote>{sizes}</blockquote>*/}
                                </Card.Text>
                                <div className="d-flex justify-content-end">
                                    {renderEdit()}
                                </div>
                                <FooterProduct onCloseEdit={onCloseEdit} />
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </form>
            <Modal
                size="sm"
                show={showDelete}
                onHide={() => setShowDelete(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Remove
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>do you want to remove it ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDelete(false)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default ProductView;