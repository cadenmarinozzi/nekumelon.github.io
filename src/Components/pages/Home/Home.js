import BackgroundRender from 'assets/images/background-render.png';
import './Home.scss';

function Home() {
	return (
		<>
			<div className='background'>
				<img
					src={BackgroundRender}
					className='background-render'
					alt='Background Render'
				/>
			</div>
			<div className='home'>
				<div className='title-container'>
					<span className='title'>
						Meet your next software engineer.
					</span>
					<span className='subtitle'>Caden Marinozzi</span>
				</div>
			</div>
		</>
	);
}

export default Home;
