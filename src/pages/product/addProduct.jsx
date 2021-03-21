import React, { useState } from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { db, storage } from "../../firebase";
import AddProductView from "./addProductView";

const AddProduct = ({ showAdd, setShowAdd }) => {

  const handleClose = () => setShowAdd(false)
  const handleShow = () => setShowAdd(true);

  const allInputs = { imgUrl: '' }
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  console.log('addProduct', showAdd);
  const [collection, setCollection] = useState('');
  const [form, setForm] = useState({
    collection: '',
    title: '',
    name: '',
    url: '',
    type: '',
    description: '',
    price: 0,
    imgSize: {
      id: 0,
      name: '',
      type: '',
      url: ''
    }
  });

  const [urlImage, setUrlImage] = useState('');

  const handleFile = e => {
    console.log('e', e)
    // setUrlImage(e.target.files[0].name);
    setForm({ ...form, ['name']: e.target.files[0].name });
  }

  console.log(imageAsFile)
  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))
  }

  const setItem = e => {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  const handleSave = async e => {
    e.preventDefault();
    if (imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
      return
    }
    const imgUrl = await imageUpload(imageAsFile)
    console.log('imgUrl', imgUrl);
    setForm({ ...form, url: imgUrl })
    console.log('saving', form);
    db.child('Products').child(form.collection).push(form), error => {
      console.log(error)
    };
    setShowAdd(false);
  }

  const imageUpload = async (image) => {
    console.log('imageUpload', image);
    const uploadTask = storage.ref(`/images/Catalogs/${form.collection}/${imageAsFile.name}`).put(imageAsFile)
    //initiates the firebase side uploading 
    return new Promise((resolve, reject) => {
      console.log('Promise');
      uploadTask.on('state_changed',
        (snapShot) => {
          //takes a snap shot of the process as it is happening
           console.log(snapShot)
        }, (err) => {
          //catches the errors
          reject(err)
        }, () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          console.log('imageAsFile.name', imageAsFile.name);
          storage.ref('images').child('Catalogs').child(form.collection).child(imageAsFile.name).getDownloadURL()
            .then(fireBaseUrl => {
              console.log('fireBaseUrl');
              setImageAsUrl({ ...imageAsUrl, imgUrl: fireBaseUrl })
              setForm({ ...form, url: fireBaseUrl })
              console.log('imageAsUrl.imgUrl');
              resolve(fireBaseUrl);
            })
            .catch(error => {
              console.log('imageAsUrl error', error);
            })
            setForm({ ...form, name: imageAsFile.name })
            console.log('termina download');
        })
    })
  }


  return <AddProductView showAdd={showAdd}
    handleClose={handleClose}
    handleSave={handleSave}
    handleFile={handleImageAsFile}
    setItem={setItem} />
}

export default AddProduct;
