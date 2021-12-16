import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
//import { Products } from "../../catalogs.json";
import Products from "../../services/Products-service";
import { GeneralContext } from "../../contexts/generalContext";
import { ProductContext } from "../../contexts/productContext";
import ProductView from "./productView";

const Product = ({ _catalogId }) => {

  const {
    productDetail, setProductDetail,
    isEdit, setIsEdit,
    urlImage, setUrlImage,
    setShowAlert, setShowAlertError,
    showEdit, setShowEdit,
  } = useContext(ProductContext);

  const { autenticado, isMobile } = useContext(GeneralContext);
  let { catalogId } = useParams();
  let { productId } = useParams();
  const history = useHistory();

  const [showDelete, setShowDelete] = useState(false);

  const [currentProduct, setCurrentProduct] = useState(productDetail);
  setUrlImage(productDetail.url);

  const renderEdit = () => {
    if (autenticado && showEdit)
      return <><Button className="justify-content-end" onClick={handleEdit}>Edit</Button>
      {'  '}<Button className="justify-content-start" onClick={sDelete}>Remove</Button>
      </>
    else return <span></span>
  }

  const handleSelectImageUrl = _url => {
    setUrlImage(_url);
  }

  const handleEdit = () => {
    setIsEdit(true);
    setShowEdit(false);
  }

  const handleCloseEdit = () => {
    setIsEdit(false);
    setShowEdit(true);
    setProductDetail(currentProduct);
  }

  const sDelete = () => {
    setShowDelete(true);
  }

  const handleDelete = async () => {
    if (_catalogId)
      catalogId = _catalogId;

    let removeProduct = await Products.getProductById(catalogId);
    removeProduct.detail.forEach((det, index) => {
      if (det.title == productDetail.title) {
        removeProduct.detail.splice(index, 1);
      }
    });
    const result = Products.save(catalogId, removeProduct);
    setShowDelete(false);
    history.push('/list');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*fetch('/api/form-submit-url', {
       method: 'POST',
       body: data,
     });*/
    if (_catalogId)
      catalogId = _catalogId;

    let saveProduct = await Products.getProductById(catalogId);
    saveProduct.detail.map((det) => {
      if (det.title == productDetail.title) {
        det.title = productDetail.type;
        det.type = productDetail.type;
        det.description = productDetail.description;
        det.price = productDetail.price;
        return det;
      }
    });
    const result = Products.save(catalogId, saveProduct);
    setCurrentProduct(productDetail);
    setIsEdit(false);
    setShowAlert(true);
    setShowAlertError(false);
  }

  return (
    <ProductView
      urlImage={urlImage}
      onSubmit={handleSubmit} onSelectImageUrl={handleSelectImageUrl}
      renderEdit={renderEdit}
      onCloseEdit={handleCloseEdit}
      showDelete={showDelete}
      setShowDelete={setShowDelete}
      handleDelete={handleDelete}
      isMobile={isMobile}
    />
  );
}

export default Product;
