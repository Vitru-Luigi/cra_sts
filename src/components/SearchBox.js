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

export default SearchBox;
