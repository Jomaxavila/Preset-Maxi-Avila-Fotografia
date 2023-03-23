import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsDatabase from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

function getSingleItem(id) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemRequested = productsDatabase.find(item => {
        return (item.id === parseInt(id))
      })
      resolve(itemRequested);
    }, 1000);
  });
 
  return promesa;
} 


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);


let {presetid} = useParams();

  useEffect(() => {
    getSingleItem(presetid).then((respuesta) => {
      console.log("promesa cumplida", respuesta);

      setProduct(respuesta);
    });
  }, [presetid]);


  return (
  
    <ItemDetail product={product}/>
    );
  }
  
  export default ItemDetailContainer;