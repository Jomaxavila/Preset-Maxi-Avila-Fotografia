
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
     img=""
     price="500"
     description="Colores sotf "
     />
     <Item
     title="Blanco y Negro"
     img=""
     price="500"
     description="Blancos y negros modernos"
     />
     <Item
     title="Film"
     img=""
     price="500"
     description="Estilo film "
     />
     <Item
     title="Vintage"
     img=""
     price="500"
     description="Estilo vintage Retros"
     />

    </div>
   
  );
}


