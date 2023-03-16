import products from "../../data/products";
import Flex from "../Flex/Flex";
import Item from "../Item";


function ItemList (props){

	return(
	<div>
	  <Flex>
      {products.map((producto) => (
      <Item 
          key={producto.id}
          id={producto.id}
          title={producto.title}
          price={producto.price}
          category={producto.category}
          img={producto.img}
          description={producto.description}/>

          
      ))}
       </Flex>
	</div>
		  
	)
}
export default ItemList;