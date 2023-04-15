import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext.jsx";
import Button from "../Button/Button.jsx";
import FormCheckout from "../CartContainer/FormCheckout.jsx";
import "./CartContainer.css";

function CartContainer() {
  const navigateTo = useNavigate();
  const context = useContext(cartContext);
  const { cart, getPriceInCart, removeItemFromCart, clearCart,createOrder } = context;

  const handleCheckout = async (userData) => {
    const order = {
      items: cart,
      buyer: userData,
      total: getPriceInCart(),
      date: new Date(),
    };

    const orderId = await createOrder(order);
    navigateTo(`/checkout/${orderId}`);
    clearCart();
  };

  // Rendering condicional -> si el carrito está vacío mostramos un mensaje "Vuelve al home" o lo que desees mostrar
  if (cart.length === 0) {
    return (
      <div className="emptyCart">
        <h2>Tu carrito está vacío</h2>
        <p>Vuelve al Home para agregar productos</p>
        <Link to="/">
          <Button>Volver al Home</Button>
        </Link>
      </div>
    );
  }

  // Desglose del carrito -> mostrar el contenido
  return (
    <>
      <h1>Tu Carrito</h1>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.img} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td>
                <Button color="#c63224" onPress={() => removeItemFromCart(item.id)}>
                  X
                </Button>
              </td>
              <th>$ {item.count * item.price}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cartList_detail">
        <h4>El total de tu compra es de ${getPriceInCart()}</h4>
      </div>
      <FormCheckout onCheckout={handleCheckout} />
    </>
  );
}

export default CartContainer;
