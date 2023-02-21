import { FC } from 'react'

type Props = { menuName: string; price: number }
export const MenuContent: FC<Props> = ({ menuName, price }) => {
	return (
		<div className='gap-8 w-36 flex flex-row justify-between'>
			<div className='w-fit'>{menuName}</div>
			<div className='w-fit grow text-right'>{price}円</div>
		</div>
	)
}
