import { Link } from 'react-router-dom';
import './Contacts.scss';

function Contacts() {
	return (
		<div className='contacts'>
			<div className='content'>
				<span className='title'>I build software.</span>
				<div className='links'>
					<a
						href='https://github.com/nekumelon'
						rel='noreferrer'
						target='_blank'>
						GitHub
					</a>
					<a
						href='https://linkedin.com/in/caden-m'
						rel='noreferrer'
						target='_blank'>
						LinkedIn
					</a>
					<Link to='/resume'>Resume</Link>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
