type Icon = {
	name: string
	iconClass: string
}
type ConctactIcon = {
	iconClass: string
	iconTitle: string
	href: string
}

export const getStackIcons = (): Icon[] => [
	{ iconClass: 'i-logos-react', name: 'React' },
	{
		iconClass: 'i-logos-solidjs-icon',
		name: 'SolidJS',
	},

	{
		iconClass: 'i-logos-typescript-icon',
		name: 'Typescript',
	},
]
export const getContactIcons = (): ConctactIcon[] => [
	{
		iconClass: 'i-logos-github-icon',
		href: 'https://github.com/n0xZ',
		iconTitle: 'Gonzalo Molina - Mi perfil de Github',
	},
	{
		iconClass: 'i-logos-linkedin-icon',
		href: 'https://www.linkedin.com/in/gonzalo-molina-153918217/',
		iconTitle: 'Gonzalo Molina - Mi perfil de Linkedin',
	},
]
