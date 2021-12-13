import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
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

 /* const [isMobile, setIsMobile] = useState(false);

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }*/

  const { autenticado, isMobile } = useContext(GeneralContext);
  let { catalogId } = useParams();
  let { productId } = useParams();

  const [currentProduct, setCurrentProduct] = useState(productDetail);
  setUrlImage(productDetail.url);

  // create an event listener
/*  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })*/
 /* const sizes = productDetail.sizes.map((item, index) => {
    return (
      <span >
        <span className="sizeStyle" key={index}>{item.size}</span>
        {"  "}
      </span>
    );
  });*/

  const renderEdit = () => {
    if (autenticado && showEdit) 
      return <Button className="justify-content-end" onClick={handleEdit}>Edit</Button>
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*fetch('/api/form-submit-url', {
       method: 'POST',
       body: data,
     });*/
     if( _catalogId)
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
      isMobile={isMobile}
    />
  );
}

export default Product;
