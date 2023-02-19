import { Card } from '@/components/common/Card'
import { HorizontalLine } from '@/components/common/HorizontalLine'

export const Total = () => {
	const totalCount = 1
	const totalPrice = 100

	return (
		<Card>
			<div className='flex flex-col gap-2 text-xl'>
				<span>お会計</span>
				<HorizontalLine />
				<span id='count'>商品数：{totalCount}個</span>
				<span id='price'>お会計：{totalPrice}円</span>
			</div>
		</Card>
	)
}
