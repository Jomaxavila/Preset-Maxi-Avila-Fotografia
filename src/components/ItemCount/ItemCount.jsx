import { useState } from "react";



const ItemCount = ({ onAddToCart }) => {
  const [count, setCount] = useState(1);

  const handleAddClick = () => {
    onAddToCart(count);
  };

  return (
    <div className="item-count">
      <button onClick={() => setCount(count - 1)} disabled={count <= 1}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)} disabled={count >= 10}>
        +
      </button>
      <button onClick={handleAddClick}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
