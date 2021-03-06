import './Footer.scss';
import PropTypes from 'prop-types';
import date from '../utils/getYear';
import {Navbar} from 'react-bootstrap';

const Footer = ({title = 'STS'}) => (
	<Navbar className='Footer' variant='dark' bg='primary'>
		<div>
			{date} &copy; {title}
		</div>
	</Navbar>
);

Footer.propTypes = {
	title: PropTypes.string,
};

export default Footer;
