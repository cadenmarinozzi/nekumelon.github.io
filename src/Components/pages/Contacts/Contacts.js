import { Link } from 'react-router-dom';
import './Contacts.scss';

function Contacts() {
	return window.innerWidth <= 500 ? (
		<div className='contacts-mobile'>
			<div className='content'>
				<span className='title2-mobile'>I build software.</span>
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
	) : (
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
					<Link to='/graphic-design-portfolio'>
						Graphic Design Portfolio
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
