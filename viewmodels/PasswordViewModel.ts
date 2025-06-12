import { useState } from "react"

export function usePasswordViewModel() {
  const savedPass: string = ''
  const [password, setPassword] = useState('')

  const onChangePassword = (str: string) => {
    setPassword(str)
  }
  
  const checkPassword = (): boolean => {
    if (savedPass === '') return true
    const res = password === savedPass
    if (res) setPassword('')
    return res
  }

  return {
    password,
    checkPassword,
    onChangePassword,
  }
}