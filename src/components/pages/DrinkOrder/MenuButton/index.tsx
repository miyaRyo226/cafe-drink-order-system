import { MenuContent } from './Content'
import { useMenuButton } from './index.hooks'

import { Button } from '@/components/common/Button'

export const MenuButton = () => {
	const { menuContents } = useMenuButton()

	return (
		<div className='w-fit flex flex-col gap-6'>
			{menuContents.map(({ buttonId, menuName, price }) => (
				<Button key={buttonId} buttonId={buttonId}>
					<MenuContent menuName={menuName} price={price} />
				</Button>
			))}
		</div>
	)
}
