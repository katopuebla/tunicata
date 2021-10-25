import { firebaseApp, db } from "../firebase";
import { collection, doc, setDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore';

    const COLLECTION = 'Products';
    const itemsRef = collection(db, COLLECTION);

    const getAll = async () => {
        //const infoData = [];
        const items = await getDocs(itemsRef);
        const infoData = items.docs.map(doc => doc.data());
        /*docs.forEach(doc => {
            infoData.push(doc.data());
        });*/
        return infoData;
    };

    const getProductDetailById = async (key) => {
        const docRef = doc(db, COLLECTION, key);
        const infoData = await getDoc(docRef);
        return infoData.data();
    };

    const isExitProductDetail = async (key, title) => {
        var exist = false;
        const infoData =  await getProductDetailById(key);
        infoData && infoData.detail.forEach(element => {
            if (element.title == title) {
                exist = true;
            }
        });
        return exist;
    }
/*
    const getProduct = async (collection, title) => {
       var ref = itemsRef.doc(collection).collection('detail');
        var query = ref.where("title", "==", title).limit(1);
        let product = await query.get().then( (item) => {
              console.log(item.docs[0].id, ' => ', item.docs[0].data());
              return item.docs[0].data();
          }).catch( error => {
            console.log(error)
          });
        return product;
        return null;
    };
*/
    const create = async (key, data) => {
        //return itemsRef.add(data);
        return await setDoc(doc(db, COLLECTION, key), data);
    };

    const update = (key, data) => {
        return itemsRef.doc(key).update(data);
    };

    const remove = (key) => {
        return itemsRef.doc(key).remove();
    };

    const removeAll = () => {
        return itemsRef.remove();
    };

//export default ProductService;
export default {
  getAll,
  getProductDetailById,
  isExitProductDetail,
 // getProduct,
  create,
  update,
  remove,
  removeAll,
};