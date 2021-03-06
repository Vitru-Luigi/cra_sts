import SearchBox from './SearchBox';
import PropTypes from 'prop-types';

const Header = ({onChangeHandler}) => (
	<header>
		<SearchBox onChangeHandler={onChangeHandler} />
	</header>
);

Header.propTypes = {
	onChangeHandler: PropTypes.func.isRequired,
};

export default Header;
