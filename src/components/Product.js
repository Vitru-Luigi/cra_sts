import './Product.scss';

const Product = ({product}) => (
	<article className='Product'>
		<h3>{product.name}</h3>
		<img src={product.image} alt='img' />
	</article>
);

export default Product;
