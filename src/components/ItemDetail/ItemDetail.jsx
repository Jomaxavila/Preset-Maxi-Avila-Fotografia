
import Flex from "../Flex/Flex";

const ItemDetail = ({product}) => {
  return (
    <Flex>
        <div className="item-card">
          <div className="item-card_header">
            <h3>{product.title}</h3>
          </div>
          <p>{product.description}</p>
          <p>Stock: {product.stock}</p>
          <img src={product.img} alt="imagen"></img>
        </div>
      
    </Flex>
  );
}

export default ItemDetail;