import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsDatabase from "../../data/products";
import ItemList from "../ItemList/ItemList";

function getItems() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDatabase);
    }, 1000);
  });

  return promesa;
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
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItemsByCategory(categoryid).then((respuesta) =>
        setProducts(respuesta)
      );
    } 
  }, [categoryid]);

  return (

      <ItemList products={products}/>
      
    );
  }
  
  export default ItemListContainer;