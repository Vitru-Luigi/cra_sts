import './Product.scss';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';

const Product = ({product}) => (
	<article className='Product'>
		<Card style={{width: '18rem'}}>
			<Card.Img variant='top' src={product.image} />
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
			</Card.Body>
		</Card>
	</article>
);

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

export default Product;
