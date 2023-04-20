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
          <h5>$ {props.price}</h5>
          <small className="descr">{props.category}</small>
          <div>
            {props.stock === 0 && <small> Sin Stock </small>}
            {props.stock > 0 && (
              <Link to={`/detail/${props.id}`}>
            <Button>
              Detalle
            </Button>
          </Link>
            )}
          </div>
        </div>
      </div>
  );
}
export default Item;
