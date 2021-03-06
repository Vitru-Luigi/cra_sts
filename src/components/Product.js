import React from 'react';

const Product = ({product}) => {
	return (
		<div>
			<h3>{product.name}</h3>
			<img src={product.image} alt='img' />
		</div>
	);
};

export default Product;
