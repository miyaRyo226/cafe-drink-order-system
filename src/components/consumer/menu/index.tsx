import { useContext } from 'react'
import { MenuManageContext } from '@/components/context/menu'

export const useMenuManage = () => {
	const { addMenu, purchasedMenu } = useContext(MenuManageContext)
	return { addMenu, purchasedMenu }
}
