 import Button from "../Button/Button"
import "./Item.css"
import {Link} from "react-router-dom"

function Item (props) {
  return (
      <div>
        <div id={props.id} className="item-card">
          <div className="item-card_header">
            <h3>{props.title}</h3>
          </div>
            <img src={props.img} className="item-card_img" alt="imagen"></img>
          <h4>$ {props.price}</h4>
          <small>{props.description}</small>
          <div>
          <Link to={`/detail/${props.id}`}>
            <Button>
              DETALLE
            </Button>
          </Link>
          </div>
        </div>
      </div>
  );
}

export default Item;
