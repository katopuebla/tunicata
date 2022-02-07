import React, { useContext, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import ReactMde from "react-mde";
import 'react-mde/lib/styles/css/react-mde-all.css';
import * as Showdown from "showdown";
import MarkdownPreview from '@uiw/react-markdown-preview';
import NumberFormat from 'react-number-format';
import { ProductContext } from '../../contexts/productContext';

const ProductDetailView = () => {

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });

    const { productDetail, setProductDetail, isEdit, setImagesAsFile } = useContext(ProductContext);
    const [selectedTab, setSelectedTab] = useState("write");

    const setItem = name => {
        return ({ target: { value } }) => {
            setProductDetail(oldValues => ({ ...oldValues, [name]: value }));
        }
    };

    const handleValueChange = (value) => {
        //this.setState({ value });
        // eslint-disable-next-line no-useless-computed-key
        setProductDetail(oldValues => ({ ...oldValues, ['description']: value }));
    };

    const handleImageAsFile = (e) => {
        const images = e.target.files;
        setImagesAsFile(images)
    }

    if (isEdit) {
        return (
            <React.Fragment>
                <br />
                <InputGroup >
                    <InputGroup.Text id="inputGroup-sizing-default">Diseño</InputGroup.Text>
                    <FormControl type="text" id="type" size="sm" defaultValue={productDetail.type} onChange={setItem('type')} />
                </InputGroup>
                <br />
                <InputGroup >
                    <InputGroup.Text id="inputGroup-sizing-default">Descripción</InputGroup.Text>
                    {/*<FormControl as="textarea" id="description" size="sm" defaultValue={productDetail.description} onChange={setItem('description')} />*/}
                    <ReactMde
                        value={productDetail.description}
                        onChange={handleValueChange}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={markdown =>
                            Promise.resolve(converter.makeHtml(markdown))
                        }
                    />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl type="number" id="price" size="sm" defaultValue={productDetail.price} onChange={setItem('price')} />
                    <InputGroup.Text>MXN</InputGroup.Text>
                    <br />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl type="file" id="images" multiple size="sm" onChange={handleImageAsFile} />
                </InputGroup>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <b>Diseño:</b> {productDetail.type}
                <br />
                <b>Descripción:</b>
                <MarkdownPreview source={productDetail.description} />
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

export default ProductDetailView;