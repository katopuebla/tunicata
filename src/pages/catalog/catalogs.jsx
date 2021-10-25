import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//import { Products } from "../../catalogs.json";
import Products from "../../services/Products-service";
import CatalogView from "./CatalogView";
import CardCatalog from "../../components/CardCatalog";
import { ProductContext } from "../../contexts/productContext";

const Catalogs = () => {
  const [catalogs, setCatalogs] = useState([]);
  let { catalogId } = useParams();
  const { productDetail, setProductDetail } = useContext( ProductContext );
  //const [catalogId, setCatalogId] = useState(useParams());
  const [show, setShow] = useState(false);
  //functions
  const handleClose = () => setShow(false);
  const handleShowCatalog = (catalog) => {
    setProductDetail(catalog);
    setShow(true);
  };

  async function fetchProducts() {
    const listData = [];
    const infoData = await Products.getProductDetailById(catalogId);
    // filter only one field in Collections
    infoData && infoData.detail.forEach( data => {
      const collections = data;
      if ( collections )
        listData.push(collections);
    });
    setCatalogs(listData); 
   }

  useEffect( async () => {
    fetchProducts();
    //setCatalogs(conllection.detail);
  }, []);

  const showCatalogos = catalogs && catalogs.map((catalog, i) =>
    <CardCatalog catalog={catalog} onShowCatalog={handleShowCatalog} key={i} />
  );

  return (
      <CatalogView
        showCatalogos={showCatalogos} show={show} onClose={handleClose}
        productDetail={productDetail} catalogId={catalogId} />
  );
}

export default Catalogs;
