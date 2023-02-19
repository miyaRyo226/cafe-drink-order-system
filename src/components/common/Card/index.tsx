import { FC, ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export const Card: FC<Props> = ({ children }) => {
	return (
		<div className='w-64 block p-6 rounded-lg shadow-lg bg-white max-w-sm'>
			{children}
		</div>
	)
}
