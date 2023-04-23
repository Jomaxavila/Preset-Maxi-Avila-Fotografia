import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext.jsx";
import Button from "../Button/Button.jsx";
import FormCheckout from "../CartContainer/FormCheckout.jsx";
import "./CartContainer.css";
import { createOrder } from "../../services/firestore";




function CartContainer() {
  const navigateTo = useNavigate();
  const context = useContext(cartContext);
  const { cart, getPriceInCart, removeItemFromCart, clearCart, } = context;

  const handleCheckout = (userData) => {
    const order = {
      items: cart,
      buyer: userData,
      total: getPriceInCart(),
      date: new Date(),
    };
    createOrder(order).then((orderId) => {
      // limpiar el carrito después de crear la orden
      clearCart();
      // redirigir a la página de checkout con el id de la orden
      navigateTo(`/checkout/${orderId}`);
    });
  };
  return (

    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <div>
          <h1 className="cart-title">Carrito de compras</h1>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img height={50} src={item.img} alt={item.title} />
                  <h2>{item.title}</h2>
                  <p>Cantidad: {item.count}</p>
                  <p>Precio: ${item.price}</p>
                  <td>{item.count}</td>
                  <button onClick={() => removeItemFromCart(item.id)}>
                    Eliminar
                  </button>
                  <th>Total ${item.count * item.price }</th>
              </div>
            ))}
          </div>
          <div className="cart-total-dos">
            <h3>Total: ${getPriceInCart()}</h3>
            <Button className="btn" onPress={clearCart}>Vaciar Carrito</Button>
          </div>
          <FormCheckout onCheckout={handleCheckout} />
        </>
      ) : (
        <div className="item-card_detail">
          <h2>Tu carrito está vacío</h2>
          <p>Vuelve al <b>Home</b> para agregar productos</p>
          <Link to="/">
           <Button>Home</Button>
          </Link>
        </div>
      )}
    </div>
  );
 };  

export default CartContainer;
