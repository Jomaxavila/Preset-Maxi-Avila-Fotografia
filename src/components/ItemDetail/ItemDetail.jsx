
import Button from "../Button/Button";
import Flex from "../Flex/Flex";


const ItemDetail = ({product}) => {
  console.log(product);
  return (
    <Flex>
      <div>
          <div className="item-card">
            <div className="item-card_header">
              <h3>{product.title}</h3>
            </div>
              <img src={product.img} className="item-card_img" alt={product.title} />
              <p className="descr">{product.description}</p>
              <p>Stock: {product.stock}</p>
            <div>
            <Button>
                AGREGAR
            </Button>
            </div>
          </div>
      </div>
    </Flex>
  );
}

export default ItemDetail;