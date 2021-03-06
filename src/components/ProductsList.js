import Products from './Products';
import Loader from './Loader';
import Message from './Message';

import './ProductsList.scss';

const ProductsList = ({error, errorMsg, loading, results}) => (
	<>
		{error && <Message msg={errorMsg} />}
		{loading ? <Loader /> : <Products products={results} />}
	</>
);

export default ProductsList;
