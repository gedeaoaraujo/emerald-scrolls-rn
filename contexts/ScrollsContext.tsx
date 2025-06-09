import React, { createContext, useState } from "react";
import { scrollsList } from "../data/MockedScrolls";

export const ScrollsContext = createContext({
    list: scrollsList,
    removeScroll: (id: number)=>{}
})
export function ScrollsProvider({ children }) {
    const [list, setList] = useState(scrollsList)

    const removeScroll = (id: number) => {
        setList((prevItems) => prevItems.filter(i => i.id !== id))
    }

    return (
        <ScrollsContext value={{ list, removeScroll }}>
            {children}
        </ScrollsContext>
    )
}