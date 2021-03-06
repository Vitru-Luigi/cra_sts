import SearchBox from './SearchBox';

const Header = ({onChangeHandler}) => (
	<header>
		<SearchBox onChangeHandler={onChangeHandler} />
	</header>
);

export default Header;
