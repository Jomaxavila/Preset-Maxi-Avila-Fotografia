
import Button from "../Button/Button";
import Flex from "../Flex/Flex";


const ItemDetail = ({product}) => {
  console.log(product);
  return (
    <Flex>
        <div className="item-card">
          <div className="item-card_header">
            <h3>{product.title}</h3>
          </div>
          <p>{product.description}</p>
          <p>Stock: {product.stock}</p>
          <img src={product.img} className="item-card_img" alt={product.title} />
          <div>
          <Button>
              AGREGAR
          </Button>
          </div>
        
        </div>
    </Flex>
  );
}

export default ItemDetail;