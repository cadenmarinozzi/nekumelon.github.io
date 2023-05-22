import { Component } from 'react';
import fitty from 'fitty';
import blog from 'assets/blog.json';
import './Blog.scss';

class Blog extends Component {
	constructor() {
		super();

		this.state = {};
	}

	componentDidMount() {
		fitty('.blog-title', {});
	}

	render() {
		const blogMap = blog.map((blog, index) => {
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
			<div className='blog'>
				<div className='blog-header'>
					<h1 className='blog-title'>WHAT'S ON MY MIND</h1>
				</div>
				<div className='posts'>{blogMap}</div>
			</div>
		);
	}
}

export default Blog;
