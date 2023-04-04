import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Flex from "../Flex/Flex";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ItemDetail = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);


  const onAddToCart = (count) => {
    const newCartItem = {
      id: product.id,
      title: product.title,
      img:product.img,
      price: product.price,
      count: count,
    };
    setCart([...cart, newCartItem]);
  };

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
            <Link to={`/detail/${product.id - 1}`}>
              <Button>Anterior</Button>
            </Link>
            <Link to={`/detail/${product.id + 1}`}>
              <Button>Siguiente</Button>
            </Link>
            <ItemCount onAddToCart={onAddToCart} />
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default ItemDetail;
