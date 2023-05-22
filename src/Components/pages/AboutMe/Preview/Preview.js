import { Link } from 'react-router-dom';
import './Preview.scss';

function Preview() {
	const hoverArrowIcon = (
		<svg className='hover-arrow' width='12' height='12' viewBox='0 0 10 10'>
			<g fillRule='evenodd'>
				<path className='hover-arrow__line-path' d='M0 5h7' />
				<path className='hover-arrow__tip-path' d='M1 1l4 4-4 4' />
			</g>
		</svg>
	);

	return (
		<Link className='link' to='/about-me'>
			<div className='about-preview'>
				<span>I get things done.</span>
				<span>Learn More {hoverArrowIcon}</span>
			</div>
		</Link>
	);
}

export default Preview;
