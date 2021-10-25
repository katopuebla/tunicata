import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const handleError = (err) => {
    console.warn(err);
    return undefined;
};

const imageUpload = async (collection, imageAsFile) => {
    var storageRef = ref(storage, `/images/Catalogs/${collection}/${imageAsFile.name}`);
    var fireBaseUrl = "";
    fireBaseUrl = await getDownloadURL(storageRef).catch(handleError);
    if(!fireBaseUrl) {
        await uploadBytes(storageRef, imageAsFile);
        fireBaseUrl = await getDownloadURL(storageRef);
    }
    return fireBaseUrl;
}

//export default ProductService;
export default {
    imageUpload
};