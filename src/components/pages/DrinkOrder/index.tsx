import { Menus } from './Menus'
import { Total } from './Total'

export const DrinkOrderPage = () => {
	return (
		<div className='flex flex-row mt-24 gap-48 justify-center items-center'>
			<Menus />
			<Total />
		</div>
	)
}
