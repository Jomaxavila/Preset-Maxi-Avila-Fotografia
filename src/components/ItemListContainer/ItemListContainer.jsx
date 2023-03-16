import React, { useState, useEffect } from "react";
import productsDatabase from "../../data/products";
import ItemList from "../ItemList/ItemList";


function getItems() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDatabase);
    }, 0);
  });

  return promesa;
}

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems().then((respuesta) => {
      console.log("promesa cumplida", respuesta);

      setProducts(respuesta);
    });
  }, []);

  return (
    <ItemList products={products}/>
    
  );
}

export default ItemListContainer;