type Project = {
	title: string
	description: string
	repository: string
	image: {
		width: number
		height: number
		url: string
	}
}

export const getProjects = (): Project[] => [
	{
		title: 'Mockxny',
		description:
			'Shopping cart , where the user can select its products, an perform its payment.',
		repository: 'https://github.com/n0xZ/mockxny',
		image: {
			width: 1350,
			height: 767,
			url: 'https://media.graphassets.com/1AWYHkdTWYlj1JlLRZag',
		},
	},
	{
		title: 'React Quiz',
		description:
			'Quiz that contains differents questions from differents genres, such as Entertainment, Science, History, etc.',
		repository: 'https://github.com/n0xZ/react-quiz',
		image: {
			width: 1679,
			height: 1049,
			url: 'https://media.graphassets.com/JxgcbnnQStq6ghF9RFuR',
		},
	},
	{
		title: 'Guess Pokemon',
		description:
			'Pokemon game, where the user must visualize an image from an Pokemon, and must guess which one is it.',
		repository: 'https://github.com/n0xZ/guess-pokemon-solid/',
		image: {
			width: 1679,
			height: 1049,
			url: 'https://media.graphassets.com/ICfXpg6USQu1NeHmXCgO',
		},
	},
	{
		title: 'Giphyx',
		description:
			'Web-app where you can find differents gifs from Giphy, and save your favourite ones.',
		repository: 'https://github.com/n0xZ/giphyx',
		image: {
			width: 1679,
			height: 1049,
			url: 'https://media.graphassets.com/cvl6brQFSsu97OKfnge1',
		},
	},
	{
		title: 'Fyx',
		description: 'Web-app, where you can find information about Studio Ghibli',
		repository: 'https://github.com/n0xZ/fyx/',
		image: {
			width: 1679,
			height: 1049,
			url: 'https://media.graphassets.com/dukEqYLS0ZwibSAeb1TA',
		},
	},
	{
		title: 'Herox',
		description:
			'Web-app, where you can find differents heroes from DC/Marvel, create an team based on heroes from those comics.',
		repository: 'https://github.com/n0xZ/herox',
		image: {
			width: 1679,
			height: 1049,
			url: 'https://media.graphassets.com/2bout24KTTebiwS4XaMC',
		},
	},
	{
		title: 'Notyx',
		description:
			"Web-app where you can create an collection of notes, so you don't need to handle those one by .txt.",
		repository: 'https://github.com/n0xZ/notyx',
		image: {
			width: 1679,
			height: 1049,
			url: 'https://media.graphassets.com/APiBxldQxieNhvVbiNEH',
		},
	},
]
