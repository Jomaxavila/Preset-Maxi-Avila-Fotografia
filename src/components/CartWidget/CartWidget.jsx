import "./CartWidget.css"
import { cartContext} from "../../context/cartContext";
import { useContext } from "react";

export default function CartWidget(props) {
	const { cart } = useContext(cartContext);

	return(
		<div className="nav_cart">
        	 🛒
			<span className="cartWidget_count">{cart.length}</span>
        </div>
	)
};