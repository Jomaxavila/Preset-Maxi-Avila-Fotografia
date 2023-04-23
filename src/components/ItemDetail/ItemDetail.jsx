
import React, { useContext, useState,} from "react";
import { cartContext } from "../../context/cartContext";
import Flex from "../Flex/Flex";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";



const ItemDetail = ({ product }) => {
  const { addItemToCart } = useContext(cartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const onAddToCart = (count) => {
    addItemToCart(product, count);
    setAddedToCart(true);
  };


  if (!product){
    return <Loader/>
  }

  return (
    <Flex>
      <div className="item-container">
        <div className="item-card">
          <div className="item-card_header">
            <h3>{product.title}</h3>
          </div>
          <img
            src={product.img}
            className="item-card_img"
            style={{ width: 130, height: 210 }}
            alt={product.title}
          />
          <p className="descr">{product.description}</p>
          <p>Stock: {product.stock}</p>
          <div>
            <div>
              {addedToCart ? (
                <Link to="/cart">
                  <Button>Ir al carrito</Button>
                </Link>
              ) : (
                <ItemCount onAddToCart={onAddToCart} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default ItemDetail;
