import { useParams } from 'react-router-dom';
import Flex from '../Flex/Flex';


function Checkout() {
  const { orderid,} = useParams();
  return (
	<Flex>
		<div style={{ color: 'white', fontSize:22, textShadow:'0 0 8px black'}}>
			<h1>Muchas gracias por tu compra ! </h1>
			<p>
				Este es tu número de orden: 
				<span>{orderid}</span>
			</p>
		</div>
	</Flex>
  );
}

export default Checkout;
