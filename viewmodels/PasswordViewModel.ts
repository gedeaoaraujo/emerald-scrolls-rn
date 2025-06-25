import { useState } from "react"
import { getPassword, savePasswordConfig } from "../database/configs.dao"

export function usePasswordViewModel() {
  const [password, setPassword] = useState('')

  const getSavedPass = async () => {
    const pass = await getPassword()
    console.log('password:', pass)
    return pass ?? ''
  }

  const savePassword = async (pass: string) => {
    await savePasswordConfig(pass)
  }

  const onChangePassword = (str: string) => {
    setPassword(str)
  }
  
  const checkPassword = async (): Promise<boolean> => {
    const res = password === await getSavedPass()
    if (res) setPassword('')
    return res
  }

  return {
    password,
    savePassword,
    checkPassword,
    onChangePassword,
  }
}