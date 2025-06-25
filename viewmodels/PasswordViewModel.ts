import { useState } from "react"
import { getPassword, savePasswordConfig } from "../database/configs.dao"
import { cryptPass } from "../utils/password"

export function usePasswordViewModel() {
  const [password, setPassword] = useState('')

  const savePassword = async (pass: string) => {
    const res = await cryptPass(pass)
    await savePasswordConfig(res)
  }

  const onChangePassword = (str: string) => {
    setPassword(str)
  }
  
  const checkPassword = async (): Promise<boolean> => {
    const digited = await cryptPass(password)
    const saved = await getPassword() ?? ''
    const res = digited === saved
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