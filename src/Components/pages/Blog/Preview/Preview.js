import blog from 'assets/blog.json';
import './Preview.scss';

function Preview() {
	const blogMap = blog.slice(0, 1).map((blog, index) => {
		return (
			<div className='post' key={index}>
				<div className='header'>
					<h3 className='title'>{blog.title}</h3>
					<span className='date'>{blog.date}</span>
				</div>
				<span className='content'>{blog.content}</span>
			</div>
		);
	});

	return (
		<div className='blog-preview'>
			<span>Recent:</span>
			<div className='posts'>{blogMap}</div>
		</div>
	);
}

export default Preview;
