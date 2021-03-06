import React from 'react';
import Product from './Product';

const Products = ({products}) => (
	<div className='Products'>
		{products.map((product, key) => (
			<Product key={key} product={product} />
		))}
	</div>
);

export default Products;
