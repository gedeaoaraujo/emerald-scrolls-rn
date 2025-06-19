import { deleteScroll, insertScroll, updateScroll } from "../database/scrolls.dao";
import React, { createContext, useState } from "react";
import { scrollsList } from "../data/MockedScrolls";
import { ScrollModel } from "../model/ScrollModel";
import { useTranslation } from 'react-i18next';
import { isEmpty } from "../utils/strings";
import { Share } from "react-native";

export const ScrollsContext = createContext({
    text: '',
    date: '',
    title: '',
    list: scrollsList,
    editScroll: (id: number)=>{},
    onChageText: (txt: string)=>{},
    removeScroll: (id: number)=>{},
    onChageDate: (date: string)=>{},
    createScroll: (): boolean=>false,
    onChageTitle: (title: string)=>{},
    updateDate: (newDate: Date) => {},
    init: (scrolls: ScrollModel[]) => {},
    shareScroll: (scroll: ScrollModel)=>{},
})

export function ScrollsProvider({ children }) {
    const { t } = useTranslation()
    const [date, setDate] = useState('')
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [list, setList] = useState(scrollsList)

    const init = (scrolls: ScrollModel[]) => {
        setList(scrolls)
    }

    const checkSavable = () => {
        let isSavable = true
        if (isEmpty(title) || isEmpty(text)) {
            alert(t('check.title.text'))
            isSavable = false
        }
        return isSavable
    }

    const onChageText = (txt: string) => setText(txt)
    const onChageDate = (date: string) => setDate(date)
    const onChageTitle = (title: string) => setTitle(title)

    const clearScroll = () => {
        setText('')
        setDate('')
        setTitle('')
    }

    const removeScroll = (id: number) => {
        setList((prevItems) => prevItems.filter(i => i.id !== id))
        deleteScroll(id)
    }

    const createScroll = (): boolean => {
        if (!checkSavable()) {
            return false
        }
        const newScroll = {
            id: list.length + 1,
            title: title, date: date, text: text
        }
        setList((prevItems) => [...prevItems, newScroll])
        insertScroll(newScroll)
        clearScroll()
        return true
    }

    const shareScroll = (scroll: ScrollModel) => {
        Share.share({ 
            message: `${scroll.title}\n${scroll.date}\n${scroll.text}`
        })
    }

    const editScroll = (scrollId: number) => {
        const item = list
            .filter(el => el.id === scrollId)[0]
        item.title = title
        item.date = date
        item.text = text
        updateScroll(item)
        clearScroll()
    }

    const updateDate = (newDate: Date) => {
        setDate(newDate.toISOString())
    }

    return (
        <ScrollsContext value={{
            list, 
            text,
            date,
            title,
            init,
            editScroll, 
            shareScroll,
            removeScroll,
            createScroll,
            onChageTitle,
            onChageDate,
            onChageText,
            updateDate
        }}>
            {children}
        </ScrollsContext>
    )
}