import BackgroundRender from 'assets/images/background-render.png';
import './Home.scss';

function Home() {
	return window.innerWidth <= 500 ? (
		<>
			<div className='background-mobile'>
				<img
					src={BackgroundRender}
					className='background-render'
					alt='Background Render'
				/>
			</div>
			<div className='home-mobile'>
				<div className='title-container'>
					<span className='title-mobile'>
						Meet your next software engineer.
					</span>
					<span className='subtitle'>Caden Marinozzi</span>
				</div>
			</div>
		</>
	) : (
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
