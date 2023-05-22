import { createRef } from 'react';
import { previewContacts } from '../contacts.js';
import './Preview.scss';
import { Link } from 'react-router-dom';

function Preview() {
	const contactsMap = previewContacts.map((contact, index) => {
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
					<div className='hidden-contacts' ref={hiddenContactsRef}>
						{valuesMap}
					</div>
				)}
			</div>
		);
	});

	return <div className='contact-preview'>{contactsMap}</div>;
}

export default Preview;
