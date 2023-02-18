import { useState } from "react"

export const useMenu = () => {
    const [menuCount, setMenuCount] = useState(0)

    const onMenuClick = () => setMenuCount(menuCount + 1)

    return { menuCount, onMenuClick }
}