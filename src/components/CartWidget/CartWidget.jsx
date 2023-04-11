import "./CartWidget.css"
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";

export default function CartWidget(props) {
  const { getItemCountInCart } = useContext(cartContext);

  return (
    <div className="nav_cart">
      🛒
      <span className="cartWidget_count">{getItemCountInCart()}</span>
    </div>
  )
};
