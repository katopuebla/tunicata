import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Products } from "../../catalogs.json";
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
  const { autenticado } = useContext(GeneralContext);

  const [currentProduct, setCurrentProduct] = useState(productDetail);
  setUrlImage(productDetail.url);

  const sizes = productDetail.sizes.map((item, index) => {
    return (
      <span >
        <span className="sizeStyle" key={index}>{item.size}</span>
        {"  "}
      </span>
    );
  });

  const renderEdit = () => {
    if (autenticado && showEdit) return <Button className="justify-content-end" onClick={handleEdit}>Edit</Button>
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

  const handleSubmit = (event) => {
    event.preventDefault();
    /*fetch('/api/form-submit-url', {
       method: 'POST',
       body: data,
     });*/
    let saveProduct = Products.find(prod => prod.collection == _catalogId);
    saveProduct.detail.map((det) => {
      if (det.title == productDetail.title) {
        det = productDetail;
      }
    });
    // Products.push(saveProduct);
    setCurrentProduct(productDetail);
    setIsEdit(false);
    setShowAlert(true);
    setShowAlertError(false);
  }

  return (
    <ProductView
      urlImage={urlImage} sizes={sizes}
      onSubmit={handleSubmit} onSelectImageUrl={handleSelectImageUrl}
      renderEdit={renderEdit}
      onCloseEdit={handleCloseEdit}
    />
  );
}

export default Product;
