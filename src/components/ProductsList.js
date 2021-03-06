import React, {useEffect, useState} from 'react';
import Products from './Products';
import Loader from './Loader';
import Message from './Message';

import './ProductsList.scss';

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		setLoading(true);
		fetch('https://api.mocki.io/v1/db81a628/products')
			.then((res) => res.json())
			.then((products) => {
				setProducts(products.products);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError(true);
				setErrorMsg(`${err}`);
			});
	}, []);

	return (
		<>
			{error && <Message msg={errorMsg} />}
			{loading ? <Loader /> : <Products products={products} />}
		</>
	);
};

export default ProductsList;
