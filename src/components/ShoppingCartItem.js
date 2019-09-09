import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const Item = props => {
	// const cart = useContext(CartContext);
	const { removeItem } = useContext(ProductContext);
	// const cart = useContext(CartContext);
	console.log(props.title);

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem(props.id)}>Remove from cart</button>

			</div>
		</div>
	);
};

export default Item;
