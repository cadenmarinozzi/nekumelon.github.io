import { Component } from 'react';
import projects from './projects.json';
import './Projects.scss';

const images = require.context('assets/images');

class Projects extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		const projectsMap = projects.map((project, index) => {
			const { name, description, url, image } = project;

			return (
				<div className='project' key={index}>
					{image && (
						<img
							src={image.includes('http') ? image : images(image)}
							alt={name}
							className='image'
						/>
					)}
					<div className='header'>
						<h3 className='name'>{name}</h3>
					</div>
					<span className='description'>{description}</span>
				</div>
			);
		});

		return <div className='projects'>{projectsMap}</div>;
	}
}

export default Projects;
