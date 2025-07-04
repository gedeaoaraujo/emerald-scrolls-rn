import React, { createContext, useContext, useState } from "react";
import { ScrollModel } from "../model/ScrollModel";
import { useTranslation } from 'react-i18next';
import { isEmpty } from "../utils/strings";
import { randomUUID } from "expo-crypto";
import { Share } from "react-native";
import Dialog from "../utils/alerts";
import { 
    deleteScrolls, 
    getAllScrolls, 
    insertScrolls, 
    updateScrolls 
} from "../database/scrolls.dao";

const ScrollsContext = createContext({
    text: '',
    date: '',
    title: '',
    searchable: false,
    toggleSearchable: ()=>{},
    list: ([] as ScrollModel[]),
    updateDate: (_date: Date) => {},
    onChageText: (_txt: string)=>{},
    removeScroll: (_id: string)=>{},
    onChageDate: (_date: string)=>{},
    onChageTitle: (_title: string)=>{},
    editScroll: async(_id: string)=>{},
    init: (_scrolls: ScrollModel[]) => {},
    shareScroll: (_scroll: ScrollModel)=>{},
    createScroll: async(): Promise<boolean>=>false,
})

export function ScrollsProvider({ children }) {
    const { t } = useTranslation()
    const [date, setDate] = useState('')
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [searchable, setSearchable] = useState(false)
    const [list, setList] = useState<ScrollModel[]>([])

    const init = (scrolls: ScrollModel[]) => {
        setList(scrolls)
    }

    const checkSavable = () => {
        let isSavable = true
        if (isEmpty(title) || isEmpty(text)) {
            Dialog.notify(t, 'check.title.text')
            isSavable = false
        }
        return isSavable
    }

    const onChageText = (txt: string) => setText(txt)
    const onChageDate = (date: string) => setDate(date)
    const onChageTitle = (title: string) => setTitle(title)
    const toggleSearchable = () => setSearchable(!searchable)

    const clearScroll = () => {
        setText('')
        setDate('')
        setTitle('')
    }

    const removeScroll = (id: string) => {
        setList((prevItems) => prevItems.filter(i => i.id !== id))
        deleteScrolls(id)
    }

    const createScroll = async (): Promise<boolean> => {
        if (!checkSavable()) {
            return false
        }
        const newScroll = {
            id: randomUUID(),
            title: title, date: date, text: text
        }
        await insertScrolls(newScroll)
        setList(await getAllScrolls())
        clearScroll()
        return true
    }

    const shareScroll = (scroll: ScrollModel) => {
        Share.share({ 
            message: `${scroll.title}\n${scroll.date}\n${scroll.text}`
        })
    }

    const editScroll = async (scrollId: string) => {
        const item = list
            .filter(el => el.id === scrollId)[0]
        item.title = title
        item.date = date
        item.text = text
        await updateScrolls(item)
        setList(await getAllScrolls())
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
            searchable,
            editScroll, 
            shareScroll,
            removeScroll,
            createScroll,
            onChageTitle,
            onChageDate,
            onChageText,
            updateDate,
            toggleSearchable
        }}>
            {children}
        </ScrollsContext>
    )
}

export const useScrolls = () => useContext(ScrollsContext)
