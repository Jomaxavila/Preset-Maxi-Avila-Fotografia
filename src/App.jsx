
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import  CartProvider  from './context/cartContext';
import Checkout from './components/Checkout/checkout';
import Footer from './components/Footer/Footer';



function App (props) {

  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <div className="page-container">
          <Navbar />
          <Title />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/detail/:presetid" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryid" element={<ItemListContainer />} />
            <Route path="/checkout/:orderid" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </CartProvider>
      </>
      );
    }
    export default App;
