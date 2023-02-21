import { Menus } from './Menus'
import { Total } from './Total'
import { MenuManageProvider } from '@/context/menu'

export const DrinkOrderPage = () => {
	return (
		<MenuManageProvider>
			<div className='flex flex-row mt-24 gap-48 justify-center items-center'>
				<Menus />
				<Total />
			</div>
		</MenuManageProvider>
	)
}
