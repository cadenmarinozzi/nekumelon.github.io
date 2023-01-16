import ResumeImg from 'assets/images/Resume.png';
import ResumePDF from 'assets/Resume.pdf';
import { Link } from 'react-router-dom';
import './Resume.scss';

function Resume() {
	return (
		<>
			<Link className='back' to='/'>
				Back
			</Link>
			<div className='resume'>
				{' '}
				<img className='resume-img' src={ResumeImg} alt='Resume' />
				<a className='download' href={ResumePDF}>
					Download
				</a>
			</div>
		</>
	);
}

export default Resume;
