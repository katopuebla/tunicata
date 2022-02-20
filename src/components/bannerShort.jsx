import React from 'react'
import { Image } from 'react-bootstrap';

const urlLeft = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2Fhuella%20izquierda.png?alt=media&token=b7c0b1f4-0a4e-4b00-b168-64252e471f66";
const urlRight = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2Fhuella%20derecha.png?alt=media&token=5d3fc905-9c90-4324-a31e-04e0683ba764";

const BannerShort = ({ description }) => {

    return (
        <>
            <h6>
                <Image src={urlLeft} style={{ width: '15', height: 'auto' }} />
                <span className="shadow"> {description} </span>
                <Image src={urlRight} style={{ width: '15', height: 'auto' }} />
            </h6>
        </>
    )
}

export default BannerShort
