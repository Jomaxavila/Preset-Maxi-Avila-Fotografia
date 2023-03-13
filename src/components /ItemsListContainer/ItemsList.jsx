import Item from "../Item";

const ItemsListContainer = ({ greeting }) => {
	return (
	  <div>
		<h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>{greeting}</h1>
		<div style={{ display: 'flex', justifyContent: 'center' }}></div>
		<Item/>
	  </div>
	);
  };
  
  export default ItemsListContainer;
  