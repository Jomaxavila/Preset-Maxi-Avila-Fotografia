import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/cartContext";
import Flex from "../Flex/Flex";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const ItemDetail = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const onAddToCart = (count) => {
    const newCartItem = {
      id: product.id,
      title: product.title,
      img:product.img,
      price: product.price,
      count: count,
    };

    // Verificar si el elemento ya existe en el carrito
    const existingCartItem = cart.find(item => item.id === product.id);

    if (existingCartItem) {
      // Si ya existe, actualizar el count del elemento existente
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, count: item.count + count };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      // Si no existe, agregar un nuevo elemento al carrito
      setCart([...cart, newCartItem]);
    }
    setAddedToCart(true);
  };

  useEffect(() => {
    setAddedToCart(false);
    return () => {
      // Limpiar el estado agregado cuando se desmonta el componente
      setAddedToCart(false);
    }
  }, [product]);

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
            {product.id > 1 ? (
              <Link to={`/detail/${product.id - 1}`}>
                <Button>Anterior</Button>
              </Link>
            ) : null}
            {product.id < 10 ? (
              <Link to={`/detail/${product.id + 1}`}>
                <Button>Siguiente</Button>
              </Link>
            ) : null}
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
