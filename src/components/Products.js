import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';

const Products = ({products}) => (
	<Container className='Products'>
		<Row>
			{products.map((product, key) => (
				<Col>
					<Product key={key} product={product} />
				</Col>
			))}
		</Row>
	</Container>
);

Products.propTypes = {
	products: PropTypes.array.isRequired,
};

export default Products;
