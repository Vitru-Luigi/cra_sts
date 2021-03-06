import SearchBox from './SearchBox';
import PropTypes from 'prop-types';
import {Navbar, Container} from 'react-bootstrap';

const Header = ({onChangeHandler}) => (
	<Navbar variant='dark' bg='primary'>
		<Container>
			<Navbar.Brand href='#'>Navbar</Navbar.Brand>
			<SearchBox onChangeHandler={onChangeHandler} />
		</Container>
	</Navbar>
);

Header.propTypes = {
	onChangeHandler: PropTypes.func.isRequired,
};

export default Header;
