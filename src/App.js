import {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';
import Main from './containers/Main';
import getData from './utils/getData';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const [searchTerm, setSearchTerm] = useState('');
	const [products, setProducts] = useState([]);

	const results = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

	useEffect(() => {
		getData(setLoading, setProducts, setError, setErrorMsg);
	}, []);

	const onChangeHandler = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<Header onChangeHandler={onChangeHandler} />
			<Main>
				<ProductsList error={error} errorMsg={errorMsg} loading={loading} results={results} />
			</Main>
			<Footer />
		</>
	);
};

export default App;
