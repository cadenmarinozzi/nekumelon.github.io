import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactMe from 'Components/pages/ContactMe';
import AboutMe from 'Components/pages/AboutMe';
import Photography from 'Components/pages/Photography/Photography';
import Blog from 'Components/pages/Blog/Blog';
import Navbar from 'Components/containers/Navbar';
import ContactPreview from 'Components/pages/ContactMe/Preview';
import ResumePDF from 'assets/Resume.pdf';
import AboutPreview from 'Components/pages/AboutMe/Preview';
import BlogPreview from 'Components/pages/Blog/Preview';
import Footer from 'Components/containers/Footer';
import PageSelector from 'Components/containers/PageSelector';
import ProjectsPreview from 'Components/pages/Projects/Preview';
import './App.scss';
import GraphicDesigns from 'Components/pages/GraphicDesign/GraphicDesign';
import Projects from 'Components/pages/Projects/Projects';

const graphicDesigns = require.context('assets/images/graphic-designs/lowres');
const photographs = require.context('assets/images/photography/lowres');

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	initSmoothScroll() {
		// https://stackoverflow.com/questions/47011055/smooth-vertical-scrolling-on-mouse-wheel-in-vanilla-javascript

		const speed = 70;
		const smooth = 10;
		const target =
			document.scrollingElement ||
			document.documentElement ||
			document.body.parentNode ||
			document.body;

		let moving = false;
		let current = target.scrollTop;

		const requestFrame = (() => {
			return (
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function callback() {
					window.setTimeout(callback, 1000 / 50);
				}
			);
		})();

		const update = () => {
			moving = true;

			const delta = (current - target.scrollTop) / smooth;

			target.scrollTop += delta;

			if (Math.abs(delta) > 0.5) requestFrame(update);
			else moving = false;
		};

		const normalizeWheelDelta = (e) => {
			if (e.detail) {
				if (e.wheelDelta)
					return (
						(e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1)
					);
				else return -e.detail / 3;
			} else return e.wheelDelta / 120;
		};

		const handleScroll = (e) => {
			e.preventDefault();

			const delta = normalizeWheelDelta(e);

			current += -delta * speed;
			current = Math.max(
				0,
				Math.min(current, target.scrollHeight - frame.clientHeight)
			);

			if (!moving) update();
		};

		let frame =
			target === document.body && document.documentElement
				? document.documentElement
				: target;

		target.addEventListener('mousewheel', handleScroll, { passive: false });
		target.addEventListener('DOMMouseScroll', handleScroll, {
			passive: false,
		});
	}

	loadPages() {
		const graphicDesignsMap = graphicDesigns.keys().map((image) => {
			return graphicDesigns(image);
		});

		const photographsMap = photographs.keys().map((image) => {
			return photographs(image);
		});

		this.setState({
			pages: [
				{
					title: 'Projects',
					url: '/projects',
					preview: {
						type: 'element',
						element: <ProjectsPreview />,
					},
				},
				{
					title: 'Graphic Design',
					url: '/graphic-design',
					preview: {
						type: 'images',
						images: graphicDesignsMap,
					},
				},
				{
					title: 'About Me',
					url: '/about-me',
					preview: {
						type: 'element',
						element: <AboutPreview />,
					},
				},
				{
					title: 'Contact Me',
					url: '/contact-me',
					preview: {
						type: 'element',
						element: <ContactPreview />,
					},
				},
				{
					title: 'Resume',
					href: ResumePDF,
					preview: {
						type: 'element',
						element: (
							<span
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									height: '100%',
								}}>
								If you're looking to hire me, this is the place
								to go!
							</span>
						),
					},
				},
				{
					title: 'Blog',
					url: '/blog',
					preview: {
						type: 'element',
						element: <BlogPreview />,
					},
				},
				{
					title: 'Photography',
					url: '/photography',
					preview: {
						type: 'images',
						images: photographsMap,
					},
				},
			],
		});
	}

	componentDidMount() {
		this.initSmoothScroll();
		this.loadPages();
	}

	handlePageSelect(page) {
		if (!page) {
			this.setState({
				selectingPage: false,
				page: null,
			});

			return;
		}

		this.setState({
			selectingPage: true,
			page,
		});
	}

	render() {
		const { selectingPage, page, pages } = this.state;

		return (
			pages && (
				<div className='page-content'>
					<BrowserRouter>
						<Navbar
							onPageSelect={this.handlePageSelect.bind(this)}
							selectingPage={selectingPage}
							page={page}
						/>
						<Routes>
							<Route
								path='*'
								element={
									<PageSelector
										pages={pages}
										onPageSelect={this.handlePageSelect.bind(
											this
										)}
									/>
								}
							/>
							<Route path='/contact-me' element={<ContactMe />} />
							<Route path='/about-me' element={<AboutMe />} />
							<Route
								path='/graphic-design'
								element={<GraphicDesigns />}
							/>
							<Route
								path='/photography'
								element={<Photography />}
							/>
							<Route path='/blog' element={<Blog />} />
							<Route path='/projects' element={<Projects />} />
						</Routes>
						<Footer />
					</BrowserRouter>
				</div>
			)
		);
	}
}

export default App;
