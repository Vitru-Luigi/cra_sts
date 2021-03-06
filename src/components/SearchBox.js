import PropTypes from 'prop-types';
import {Form, FormControl} from 'react-bootstrap';

const SearchBox = ({onChangeHandler}) => (
	<Form inline>
		<FormControl type='text' placeholder='Search' className='mr-sm-2' onChange={onChangeHandler} />
	</Form>
);

SearchBox.propTypes = {
	onChangeHandler: PropTypes.func.isRequired,
};

export default SearchBox;
