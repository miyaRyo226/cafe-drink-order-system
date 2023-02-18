import { FC, ReactNode } from 'react'

type Props = {
	buttonId: string
	children: ReactNode
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button: FC<Props> = ({ buttonId, children, onClick }) => {
	return (
		<button
			onClick={onClick}
			id={buttonId}
			className='relative shadow-md bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
		>
			{children}
		</button>
	)
}
