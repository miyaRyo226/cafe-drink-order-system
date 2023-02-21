import { useState } from "react"
import { useMenuManage } from '@/consumer/menu';


export const useMenu = () => {
    const { addMenu } = useMenuManage()
    const [menuCount, setMenuCount] = useState(0)

    const onMenuClick = (price: number) => {
        setMenuCount(menuCount + 1)
        addMenu(price)
    }

    return { menuCount, onMenuClick }
}