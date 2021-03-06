import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';
import './Message.scss';

const Message = ({msg, variant}) => (
	<Alert variant={variant}>
		<p className='mb-0'>{msg}</p>
	</Alert>
);

Message.propTypes = {
	msg: PropTypes.string,
};

export default Message;
