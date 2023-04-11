import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsDatabase from "../../data/products";
import ItemList from "../ItemList/ItemList";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Loader from "../Loader/Loader";


const firebaseConfig = {
  apiKey: "AIzaSyD40Edb_QZ2cGWYb1Sl3xhvXZMW-6x52Yo",
  authDomain: "react-coder-b1d34.firebaseapp.com",
  projectId: "react-coder-b1d34",
  storageBucket: "react-coder-b1d34.appspot.com",
  messagingSenderId: "926772887430",
  appId: "1:926772887430:web:02cb63ebc7b6a3d923b607"
};

const app = initializeApp(firebaseConfig);
console.log(app);
const db = getFirestore (app)
console.log (db)
 
async function getItems_() {
const productsRef = collection(db, "products");
const productsSnap = await getDocs(productsRef);
const documents = productsSnap.docs;
const docsData = documents.map((doc) => {
  return{id:doc.id, ...doc.data()}
});
return docsData;

}

function getItemsByCategory(categoryUrl) {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      const filtro = productsDatabase.filter(
        (item) => item.category === categoryUrl
      );
      resolve(filtro);
    }, 1000);
  });

  return promesa;
}
/* ----------------------------------------------------  */

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (!categoryid) {
      getItems_().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItemsByCategory(categoryid).then((respuesta) =>
        setProducts(respuesta)
      );
    } 
  }, [categoryid]);

  if (products.length === 0){
    return <Loader/>
  }

  return (

      <ItemList products={products}/>
      
    );
  }
  
  export default ItemListContainer;