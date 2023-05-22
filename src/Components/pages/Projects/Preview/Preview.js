import projects from '../projects.json';
import './Preview.scss';

const images = require.context('assets/images');

function Preview() {
	// const projectsMap = projects
	// 	.filter((project) => {
	// 		return project.image && true;
	// 	})
	// 	.map((project, index) => {
	// 		const { name, description, url, image } = project;

	// 		return (
	// 			<div className='project' key={index}>
	// 				<div className='header'>
	// 					<span className='name'>{name}</span>
	// 				</div>
	// 				<img
	// 					src={image.includes('https') ? image : images(image)}
	// 					alt={name}
	// 					className='image'
	// 				/>
	// 			</div>
	// 		);
	// 	});

	// return <div className='projects-preview'>{projectsMap}</div>;
	return (
		<div className='projects-preview'>
			<span>Some of the projects I've made recently</span>
		</div>
	);
}

export default Preview;
