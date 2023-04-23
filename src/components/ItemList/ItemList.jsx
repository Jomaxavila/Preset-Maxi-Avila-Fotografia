import Flex from "../Flex/Flex";
import Item from "../Item";

function ItemList (props) {
  return (
    <div>
      <Flex>
        {props.products.map((producto) => (
          <Item 
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            img={producto.img}
            stock={producto.stock}
          />
        ))}
      </Flex>
    </div>
  )
}

export default ItemList;
