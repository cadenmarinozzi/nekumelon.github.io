import { Component } from 'react';
import './PageSelector.scss';
import { Link, useNavigate } from 'react-router-dom';

class PageSelector extends Component {
	constructor() {
		super();

		this.state = {};
	}

	handlePageSelect(page) {
		this.props.onPageSelect(page);

		this.setState(
			{
				selectingPage: true,
			},
			() => {
				setTimeout(() => {
					this.props.navigate(page.url || page.href);
				}, 200 * this.props.pages.length);
			}
		);
	}

	render() {
		const { pages } = this.props;
		const { selectingPage } = this.state;

		const pagesMap = pages.map((page, index) => {
			const { title, preview, url, href } = page;

			return (
				<div className='page' key={index}>
					<div className='preview'>
						{preview &&
							(preview.type === 'image' ? (
								<img
									src={require('assets/images/noise.png')}
									alt='preview'
									className='preview-content'
								/>
							) : preview.type === 'images' ? (
								<div className='preview-images'>
									{preview.images.map((image, index) => {
										return (
											<img
												src={image}
												alt='preview'
												className='preview-content'
												key={index}
											/>
										);
									})}
								</div>
							) : (
								preview.type === 'element' && (
									<div className='element-preview-content'>
										{preview.element}
									</div>
								)
							))}
					</div>
					<div className='page-title'>
						<span>{index}</span>
						{url ? (
							<h1
								className='title'
								onClick={this.handlePageSelect.bind(
									this,
									page
								)}>
								{title}
							</h1>
						) : (
							href && (
								<a
									className='link'
									href={href}
									target='_blank'
									rel='noopener noreferrer'>
									<h1 className='title'>{title}</h1>
								</a>
							)
						)}
					</div>
				</div>
			);
		});

		return (
			<div
				className={`page-selector ${
					selectingPage && 'page-selector-selecting-page'
				}`}>
				{pagesMap}
			</div>
		);
	}
}

function PageSelectorWrapper(props) {
	const navigate = useNavigate();

	return <PageSelector navigate={navigate} {...props} />;
}

export default PageSelectorWrapper;
