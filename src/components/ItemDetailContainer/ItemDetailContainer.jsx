import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { cartContext } from "../../context/cartContext";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { cart, setCart } = useContext(cartContext);

  let { presetid } = useParams();

  useEffect(() => {
    getSingleItem(presetid).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [presetid]);

  // función para agregar el item al carrito
  const addToCart = (product, quantity) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      // el item ya existe en el carrito, actualizamos la cantidad
      const newCart = [...cart];
      newCart[index].count += quantity;
      setCart(newCart);
    } else {
      // el item no existe en el carrito, lo agregamos
      const newCartItem = { ...product, count: quantity };
      setCart([...cart, newCartItem]);
    }
  };

  return (
    <ItemDetail product={product} addToCart={addToCart} />
  );
}

export default ItemDetailContainer;
