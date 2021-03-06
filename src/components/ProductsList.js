import React from 'react';
import products from '../utils/data';
import Product from './Product';

const ProductsList = () => {
	return (
		<div>
			{products.map((product) => {
				return <Product product={product} />;
			})}
		</div>
	);
};

export default ProductsList;
