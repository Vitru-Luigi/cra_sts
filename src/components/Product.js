import './Product.scss';
import PropTypes from 'prop-types';

const Product = ({product}) => (
	<article className='Product'>
		<h3>{product.name}</h3>
		<img src={product.image} alt='img' />
	</article>
);

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

export default Product;
