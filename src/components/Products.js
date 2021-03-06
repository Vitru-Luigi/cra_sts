import React from 'react';
import Product from './Product';

const Products = ({products}) => (
	<section className='Products'>
		{products.map((product, key) => (
			<Product key={key} product={product} />
		))}
	</section>
);

export default Products;
