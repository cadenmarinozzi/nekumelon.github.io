import './AboutMe.scss';

function AboutMe() {
	const startDate = new Date('2015-01-01');
	const diff = Date.now() - startDate;
	const diffDate = new Date(diff);
	const programmingYears = Math.abs(diffDate.getUTCFullYear() - 1970);

	return (
		<div className='about-me'>
			<div className='section'>
				<h1>
					Let's keep it <u>simple</u>:
				</h1>
				<div className='details'>
					<span>
						I'm a Bay Area based full-stack software engineer with a
						passion for computers, physics, math, and design.
					</span>
					<span>
						I can learn a new framework in a day and use it for the
						rest of my life.{' '}
					</span>
				</div>
			</div>
			<div className='section'>
				<h1>
					Or if you want a <u>little more</u>:
				</h1>
				<div className='details'>
					<h2>Programming</h2>
					<span>
						I've been programming for {programmingYears} years.
					</span>
					<h3>Beginnings</h3>
					<span>
						I am a self-taught programmer, however I plan to pursue
						computer science in college.
					</span>
					<span>
						I was introduced into the world of programming with
						Roblox hacks. Over numerous years I created hundreds of
						cheats with complex architectures.
					</span>
					<h3>Current</h3>
					<span>
						I am currently creating open-source projects and
						researching many different fields of computer science in
						order to expand my knowledge and capabilities.
					</span>
					<h2>Achievements</h2>
					<h3>Congressional App Challenge 2022</h3>
					<span>
						My partner and I received second place for our language
						learning app at the Congressional App Challenge. Our
						app, Interami, is a language learning app that connects
						classes from around the world to learn languages
						together.
					</span>
					<h3>DSCO Datathon 2023</h3>
					<span>
						I received the second place prize for my neural network
						at the DSCO23 data science hackathon. The challenge was
						to create the most accurate neural network to predict
						whether a current day's weather is dangerous, given
						features such as percipitation, air quality,
						temperature, etc. My neural network performed with the
						highest accuracy.
					</span>
					<h3>Los Altos Hacks 2023 Hackathon</h3>
					<span>
						I competed at the Los Altos Hacks 24 hour hackathon and
						created an AI powered therapy chat bot website. I was
						given praise by the judges for my website's
						professionalism and cleanliness.
					</span>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
