import { Component, createRef } from 'react';
import { fullContacts } from './contacts.js';
import fitty from 'fitty';
import './ContactMe.scss';
import { Link } from 'react-router-dom';

class ContactMe extends Component {
	componentDidMount() {
		fitty('.contacts-title', {});
	}

	render() {
		const contactsMap = fullContacts.map((contact, index) => {
			const hiddenContactsRef = createRef();

			const valuesMap = contact.values.map((value, index) => {
				return (
					<span className='hidden-contact' key={index}>
						{value}
					</span>
				);
			});

			const handleMouseEnter = () => {
				if (hiddenContactsRef.current)
					hiddenContactsRef.current.style.opacity = 1;
			};

			const handleMouseLeave = () => {
				if (hiddenContactsRef.current)
					hiddenContactsRef.current.style.opacity = 0;
			};

			const isUrl = contact.type === 'url';

			return (
				<div
					className='contact'
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					key={index}>
					{isUrl ? (
						<a
							target='_blank'
							rel='noopener noreferrer'
							href={contact.values[0]}>
							{contact.name}
						</a>
					) : (
						<span>{contact.name}</span>
					)}
					{!isUrl && (
						<div
							className='hidden-contacts'
							ref={hiddenContactsRef}>
							{valuesMap}
						</div>
					)}
				</div>
			);
		});

		return (
			<div className='contact-me'>
				<h1 className='contacts-title'>WHERE CAN YOU FIND ME?</h1>
				<div className='contacts'>{contactsMap}</div>
			</div>
		);
	}
}

export default ContactMe;
