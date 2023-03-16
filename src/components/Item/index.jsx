
import Button from '../Button/Button';
import './Item.css';
import '../Button/Button.css'


function Item (props) {
	return(
		<div>
			<div className="item-card">
      			<div className="item-card_header">
        				<h3>{props.title}</h3>
      			</div>
      			<img src={props.img} className="item-card_img" alt="imagen"></img>
      			<h4>$ {props.price}</h4>
      			<small>{props.description}</small>
				<div>
					<Button>
						AGREGAR
					</Button>
				</div>
   			 </div>
		
		</div>
	);
}

export default Item;