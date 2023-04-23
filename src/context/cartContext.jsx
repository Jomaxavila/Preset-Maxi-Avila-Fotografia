import React, { useState, createContext } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item, count) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      setCart([...cart, { ...item, count }]);
    } else {
      const newCart = [...cart];
      newCart[itemIndex].count += count;
      setCart(newCart);
    }
  };

  const removeItemFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getPriceInCart = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    return totalPrice;
  };

  const getItemCountInCart = () => {
    let totalCount = 0;
    cart.forEach((item) => {
      totalCount += item.count;
    });
    return totalCount;
  };
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
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getPriceInCart,
        getItemCountInCart,
        addToCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
