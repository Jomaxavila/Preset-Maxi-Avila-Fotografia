import "./Navbar.css"
import CartWidget from "./CartWidget/CartWidget";

export default function Navbar (props){
     return (
    
	     <div className="nav_container">
		     <nav className="nav_bar">
                    <div className="nav_brand">
                         <h1 href=" "> Maxi Avila Fotografia Presets </h1>
                    <div/>
                    <div className="nav_items">
                              <ul>
                                   <li >
                                        <a href=" ">Color</a>
                                   </li>
                                   <li>
                                        <a href=" "> Black & White </a>
                                   </li>
                                   <li >
                                        <a href=" ">Film</a>
                                   </li>
                                   <li>
                                        <a href=" "> Vintage </a>
                                   </li>
                              </ul>
                    </div>
                    <CartWidget/>
                    </div>
               </nav>
	     </div>
	);
};


