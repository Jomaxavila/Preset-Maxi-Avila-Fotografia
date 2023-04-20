import React, { useState, createContext } from "react";
export const cartContext = createContext();


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item, count) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.index === item.index);

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
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
