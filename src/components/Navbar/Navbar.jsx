import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import Brand from "../Brand/Brand";
import { Link, } from "react-router-dom"

export default function Navbar(props) {
     return (
          <div className="nav_container">
          <nav className="nav_bar">
              <Link className="Brand" to="/">
                    <Brand/>
              </Link> 
               <div className="nav_items">
               <ul>
                    <li>
                         <Link to="category/Color">Color</Link>
                    </li>
                    <li>
                         <Link to="category/Black-white"> Black & White </Link>
                    </li>
                    <li>
                         <Link to="category/Film">Film</Link>
                    </li>
                    <li>
                         <Link to="category/Vintage"> Vintage </Link>
                    </li>
               </ul>
               </div>  
               <Link to="/cart">
                    <CartWidget />
               </Link>
          </nav>
          </div>
          );
     }

