
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title'

export default function App(props) {
  return (
    <div>
      <Navbar/>
      <div className='bodyContain'>
      <Title/>
      <ItemListContainer/>
      </div>
      
    </div>
   
  );
}



