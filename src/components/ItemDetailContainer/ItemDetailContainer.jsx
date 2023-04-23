import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { cartContext } from "../../context/cartContext";
import {getSingleItem} from "../../services/firestore"


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { addToCart } = useContext(cartContext);

  let { presetid } = useParams();

  useEffect(() => {
    getSingleItem(presetid).then((respuesta) => {
      console.log("promesa cumplida", respuesta);
      setProduct(respuesta);
    });
  }, [presetid]);

 

  return (
    <ItemDetail product={product} addToCart={addToCart} />
  );
}

export default ItemDetailContainer;
