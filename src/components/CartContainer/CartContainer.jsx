import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext.jsx";

function CartContainer() {
  const context = useContext(cartContext);
  const cart = context.cart;
  const getPriceInCart = context.getPriceInCart;
  //1. Rendering condicional -> si el carrito está vacío mostramos un mensaje "Volve al home"

  //2. Desglose del carrito -> mostrar el contenido
  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>Volvé al home para agregar productos a tu carrito.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>Cantidad: {product.count}</p>
              <p>Precio: ${product.price}</p>
            </div>
          ))}
          <span>El total de tu compra es: ${getPriceInCart()} </span>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
