import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Products } from "../../catalogs.json";
import CatalogView from "./CatalogView";
import CardCatalog from "../../components/CardCatalog";
import { ProductContext } from "../../contexts/productContext";

const Catalogs = () => {
  const [catalogs, setCatalogs] = useState([{}]);
  let { catalogId } = useParams();
  const { productDetail, setProductDetail } = useContext( ProductContext );
  const [show, setShow] = useState(false);
  //functions
  const handleClose = () => setShow(false);
  const handleShowCatalog = (catalog) => {
    setProductDetail(catalog);
    setShow(true);
  };

  useEffect(() => {
    let conllection = Products.find(prod => prod.collection == catalogId);
    setCatalogs(conllection.detail);
  }, []);

  const showCatalogos = catalogs.map((catalog, i) =>
    <CardCatalog catalog={catalog} onShowCatalog={handleShowCatalog} key={i} />
  );

  return (
      <CatalogView
        showCatalogos={showCatalogos} show={show} onClose={handleClose}
        productDetail={productDetail} catalogId={catalogId} />
  );
}

export default Catalogs;
