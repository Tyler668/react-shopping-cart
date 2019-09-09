import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = item =>{
		console.log('orig-cart', cart);
		const newCart = cart;
		for( var i = 0; i < newCart.length; i++){ 
			if (newCart[i].id === item) {
			  newCart.splice(i, 1); 
			  i--;
			}
		 }
		 console.log('new cart',newCart);
		setCart(newCart);
		console.log('cart', cart);
	}

	return (
		<ProductContext.Provider value={{products, addItem, removeItem}}>
			<CartContext.Provider value={cart} >
				<div className="App">
					<Navigation cart={cart} />
					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>
					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
