import './Product.scss';

const Product = ({product}) => (
	<div className='Product'>
		<h3>{product.name}</h3>
		<img src={product.image} alt='img' />
	</div>
);

export default Product;
