import { useState } from "react";
import Button from "../Button/Button";



const ItemCount = ({ onAddToCart }) => {
  const [count, setCount] = useState(1);

  const handleAddClick = () => {
    onAddToCart(count);
  };

  return (
    <div className="item-count">
      <Button onPress={() => setCount(count - 1)} disabled={count <= 1}>
        -
      </Button>
      <span>{count}</span>
      <Button onPress={() => setCount(count + 1)} disabled={count >= 10}>
        +
      </Button>
      <Button onPress={handleAddClick}>Agregar al carrito</Button>
    </div>

  );

};

export default ItemCount;
