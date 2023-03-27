
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import CartContainer from './components/CartContainer/CartContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


export default function App(props) {
  return (
    <BrowserRouter>
        <Navbar />
        <Title />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path='/detail/:presetid' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
        </Routes>
    </BrowserRouter>
  );
}