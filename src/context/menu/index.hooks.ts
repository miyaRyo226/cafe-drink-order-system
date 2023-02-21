import { useState } from 'react';
import { ContextType } from './index';
export const useMenuManageProvider = () => {
    const [purchasedMenu, setPurchasedMenu] = useState<ContextType["purchasedMenu"]>({ totalCount: 0, totalPrice: 0 })

    const addMenu = (price: number) => {
        setPurchasedMenu({ totalCount: purchasedMenu.totalCount + 1, totalPrice: purchasedMenu.totalPrice + price })
    }

    return { purchasedMenu, addMenu }
}