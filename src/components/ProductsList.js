import Products from './Products';
import Loader from './Loader';
import Message from './Message';
import PropTypes from 'prop-types';

import './ProductsList.scss';

const ProductsList = ({error, errorMsg, loading, results}) => (
	<>
		{error && <Message msg={errorMsg} variant='danger' />}
		{loading ? <Loader /> : <Products products={results} />}
	</>
);

ProductsList.propTypes = {
	error: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
	errorMsg: PropTypes.string.isRequired,
	results: PropTypes.array.isRequired,
};

export default ProductsList;
