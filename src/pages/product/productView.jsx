import React, { useContext } from 'react';
import { Card, Col, Modal, Row } from 'react-bootstrap';
import AlertProduct from '../../components/AlertProduct';
import FooterProduct from '../../components/FooterProduct';
import { ProductContext } from '../../contexts/productContext';
import ProductDetail from './productDetail';

const ProductView = ({ onSubmit, sizes, onSelectImageUrl, renderEdit, onCloseEdit }) => {
    const { productDetail, urlImage } = useContext(ProductContext);
    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{productDetail.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertProduct />
                    <div className="d-flex justify-content-end">
                        {renderEdit()}
                    </div>
                    <Card fluid>
                        <Card.Body fluid>
                            <Row className="justify-content-md-center">
                                <Col xs={4} md={8}>
                                    <Card.Img src={urlImage} />
                                    <Card.Text>
                                        <ProductDetail />
                                        <br />
                                        <b>Talla</b>
                                        <blockquote>{sizes}</blockquote>
                                    </Card.Text>
                                </Col>
                                <Col xs={4} md={4}>
                                    <Card.Img
                                        src={productDetail.url}
                                        className="img"
                                        onClick={() => onSelectImageUrl(productDetail.url)}
                                    />
                                    <Card.Img
                                        src={productDetail.imgSize.url}
                                        className="imgSize"
                                        onClick={() => onSelectImageUrl(productDetail.imgSize.url)}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                        <FooterProduct onCloseEdit={onCloseEdit} />
                    </Card>
                </Modal.Body>
            </form>
        </React.Fragment>
    );
}

export default ProductView;