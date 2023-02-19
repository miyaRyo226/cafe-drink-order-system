import { Card } from '@/components/common/Card'
import { HorizontalLine } from '@/components/common/HorizontalLine'
import { useMenuManage } from '@/consumer/menu'

export const Total = () => {
	const { purchasedMenu } = useMenuManage()

	return (
		<Card>
			<div className='flex flex-col gap-2 text-xl'>
				<span>お会計</span>
				<HorizontalLine />
				<span id='count'>商品数：{purchasedMenu.totalCount}個</span>
				<span id='price'>お会計：{purchasedMenu.totalPrice}円</span>
			</div>
		</Card>
	)
}
