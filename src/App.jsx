
import './App.css';
import Navbar from './components /Navbar/Navbar';
import  Item from './components /Item';
import ItemsListContainer from './components /ItemsListContainer/ItemsList';



export default function App(props) {
  return (
    <div>
      <Navbar/>
      <ItemsListContainer greeting="Bienvenidos a mi tienda Online"/>
      <Item
     title="Color"
     img="/imgs/color1.jpg"
     price="500"
     description="Colores sotf "
     />
     <Item
     title="Blanco y Negro"
     img="/imgs/blancoyNegro1.jpg"
     price="500"
     description="Blancos y negros modernos"
     
     />
     <Item
     title="Film"
     img="/imgs/film1.jpg"
     price="500"
     description="Estilo film "
     />
     <Item
     title="Vintage"
     img="/imgs/vintage1.jpg"
     price="500"
     description="Estilo vintage Retros"
     />

    </div>
   
  );
}


