import {useState} from 'react';

const SearchBox = () => {
	const [input, setInput] = useState('');
	return (
		<div>
			<label htmlFor='search'>Search</label>
			<input id='search' type='text' onChange={(e) => setInput(e.target.value)} />
		</div>
	);
};

export default SearchBox;
