import Flex from "../Flex/Flex";
import Item from "../Item";

function ItemList (props) {
  return (
    <div>
      <Flex>
        {props.products.map((producto) => (
          <Item 
            key={producto.id}
            id={producto.index}
            title={producto.title}
            price={producto.price}
            category={producto.category}
            img={producto.img}
          />
        ))}
      </Flex>
    </div>
  )
}

export default ItemList;
