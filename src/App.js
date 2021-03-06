import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Main from './containers/Main';
import './App.css';
import {useState, useEffect} from 'react';

const App = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const [searchTerm, setSearchTerm] = useState('');
	const [products, setProducts] = useState([]);

	const results = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

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

	const onChangeHandler = (e) => {
		console.log(e.target.value);
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		fetch('https://api.mocki.io/v1/db81a628/products')
			.then((response) => response.json())
			.then((data) => setProducts(data.products));
	}, []);

	return (
		<>
			<Header onChangeHandler={onChangeHandler} />
			<Main>
				<ProductsList error={error} errorMsg={errorMsg} loading={loading} results={results} />
			</Main>
		</>
	);
};

export default App;
