import PropTypes from 'prop-types';

const SearchBox = ({onChangeHandler}) => {
	return (
		<div>
			<div>
				<label htmlFor='search'>Search</label>
				<input id='search' type='text' onChange={onChangeHandler} />
			</div>
		</div>
	);
};

SearchBox.propTypes = {
	onChangeHandler: PropTypes.func.isRequired,
};

export default SearchBox;
