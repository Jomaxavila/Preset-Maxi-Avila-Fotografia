import { useParams } from 'react-router-dom';
import Flex from '../Flex/Flex';


function Checkout() {
  const { orderid} = useParams();
  return (
	<Flex>
		<div>
			<h1>Muchas gracias por tu compra </h1>
		<p className="item-card_price"> Este es tu numero de orden {orderid}</p>
		</div>
		</Flex>
  );
}

export default Checkout;
