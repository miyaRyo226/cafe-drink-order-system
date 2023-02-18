import { ComponentProps } from 'react';

import { MenuContent } from './Menu/Content';

import { Button } from '@/components/common/Button';
export const useMenus = () => {
    const menuContents: ReadonlyArray<ComponentProps<typeof MenuContent> & Pick<ComponentProps<typeof Button>, "buttonId">> = [
        { buttonId: "coffee", menuName: "コーヒー", price: 480 },
        { buttonId: "tea", menuName: "紅茶", price: 280 },
        { buttonId: "milk", menuName: "ミルク", price: 180 },
        { buttonId: "coke", menuName: "コーラ", price: 190 },
        { buttonId: "beer", menuName: "ビール", price: 580 },
    ]
    return { menuContents }
}