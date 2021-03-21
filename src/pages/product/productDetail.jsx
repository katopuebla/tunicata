import React, { useContext } from 'react';
import NumberFormat from 'react-number-format';
import { ProductContext } from '../../contexts/productContext';

const ProductDetail = () => {
    const { productDetail, setProductDetail, isEdit } = useContext(ProductContext);

    const setItem = name => {
        return ({ target: { value } }) => {
            setProductDetail(oldValues => ({ ...oldValues, [name]: value }));
        }
    };

    if (isEdit) {
        return (
            <React.Fragment>
                Diseño: <input type="text" id="type" defaultValue={productDetail.type} onChange={setItem('type')} />
                <br />
                <input type="text" id="description" defaultValue={productDetail.description} onChange={setItem('description')} />
                <br />
                <mark>
                    <b><input type="text" id="price" defaultValue={productDetail.price} onChange={setItem('price')} /></b>
                </mark>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                Diseño: {productDetail.type}
                <br />
                {productDetail.description}
                <br />
                <mark>
                    <b>
                        <NumberFormat
                            thousandSeparator={true}
                            prefix={"$ "}
                            value={productDetail.price}
                            displayType={"text"}
                            suffix={" MXN"}
                            style={{ color: "purple" }}
                        />
                    </b>
                </mark>
            </React.Fragment>
        );
    }
}

export default ProductDetail;