import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';
import Main from './containers/Main';
import './App.css';

const App = () => (
	<>
		<Header />
		<Main>
			<ProductsList />
		</Main>
		<Footer />
	</>
);

export default App;
