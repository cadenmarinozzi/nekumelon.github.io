const previewContacts = [
	{
		name: 'GitHub',
		values: ['https://github.com/nekumelon'],
		type: 'url',
	},
	{
		name: 'Email',
		values: ['cadenmarinozzi@gmail.com', 'nekumelon@gmail.com'],
		type: 'email',
	},
	{
		name: 'Phone Number',
		values: ['+1 (415) 272-9899'],
		type: 'phone-number',
	},
	{
		name: 'LinkedIn',
		values: ['https://linkedin.com/in/caden-m'],
		type: 'url',
	},
];

const fullContacts = [
	...previewContacts,
	{
		name: 'Medium',
		values: ['https://medium.com/@cadenmarinozzi'],
		type: 'url',
	},
];

export { fullContacts, previewContacts };
