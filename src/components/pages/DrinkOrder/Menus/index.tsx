import { useMenus } from './index.hooks'
import { Menu } from './Menu'

export const Menus = () => {
	const { menuContents } = useMenus()
	return (
		<div className='flex flex-col gap-4'>
			{menuContents.map((menuContent) => (
				<Menu key={menuContent.buttonId} {...menuContent} />
			))}
		</div>
	)
}
