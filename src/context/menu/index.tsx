import { createContext, FC, ReactNode } from 'react'
import { useMenuManageProvider } from './index.hooks'

type Props = { children: ReactNode }

export type ContextType = {
	purchasedMenu: { totalCount: number; totalPrice: number }
	addMenu: (price: number) => void
}

export const MenuManageContext = createContext<ContextType>({
	// eslint-disable-next-line @typescript-eslint/no-empty-function, unused-imports/no-unused-vars
	addMenu: (_: number) => {},
	purchasedMenu: { totalCount: 0, totalPrice: 0 }
})

export const MenuManageProvider: FC<Props> = ({ children }) => {
	const { addMenu, purchasedMenu } = useMenuManageProvider()

	return (
		<MenuManageContext.Provider
			value={{
				addMenu,
				purchasedMenu
			}}
		>
			{children}
		</MenuManageContext.Provider>
	)
}
