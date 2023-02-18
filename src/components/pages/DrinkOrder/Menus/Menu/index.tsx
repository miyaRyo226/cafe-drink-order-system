import { FC } from 'react'
import { useMenus } from '../index.hooks'
import { MenuContent } from './Content'
import { useMenu } from './index.hooks'
import { Button } from '@/components/common/Button'

type Props = ReturnType<typeof useMenus>['menuContents'][number]

export const Menu: FC<Props> = ({ buttonId, menuName, price }) => {
	const { menuCount, onMenuClick } = useMenu()
	return (
		<div className='w-fit flex flex-col gap-6'>
			<Button onClick={onMenuClick} key={buttonId} buttonId={buttonId}>
				<MenuContent menuName={menuName} price={price} />
				<div
					id={`${buttonId}-count`}
					className='absolute inline-flex items-center justify-center p-4 w-6 h-6 text-xs text-white bg-red-600 rounded-full -top-3 -right-5'
				>
					{menuCount}
				</div>
			</Button>
		</div>
	)
}
