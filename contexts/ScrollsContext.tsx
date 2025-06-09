import React, { createContext, useState } from "react";
import { scrollsList } from "../data/MockedScrolls";
import { ScrollModel } from "../model/ScrollModel";
import { Share } from "react-native";

export const ScrollsContext = createContext({
    text: '',
    title: '',
    list: scrollsList,
    createScroll: ()=>{},
    onChageText: (txt: string)=>{},
    removeScroll: (id: number)=>{},
    onChageDate: (date: string)=>{},
    onChageTitle: (title: string)=>{},
    shareScroll: (scroll: ScrollModel)=>{},
})

export function ScrollsProvider({ children }) {
    const [date, setDate] = useState('')
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [list, setList] = useState(scrollsList)

    const onChageText = (txt: string) => setText(txt)
    const onChageDate = (date: string) => setDate(date)
    const onChageTitle = (title: string) => setTitle(title)

    const removeScroll = (id: number) => {
        setList((prevItems) => prevItems.filter(i => i.id !== id))
    }
    
    const createScroll = () => {
        const newScroll = {
            id: list.length + 1,
            title: title, date: date, text: text
        }
        setList((prevItems) => [...prevItems, newScroll])
        
        setText('')
        setDate('')
        setTitle('')
    }

    const shareScroll = (scroll: ScrollModel) => {
        Share.share({ 
            message: `${scroll.title}\n${scroll.date}\n${scroll.text}`
        })
    }

    return (
        <ScrollsContext value={{
            list, 
            text, 
            title,
            shareScroll,
            removeScroll, 
            createScroll, 
            onChageTitle,
            onChageDate,
            onChageText 
        }}>
            {children}
        </ScrollsContext>
    )
}