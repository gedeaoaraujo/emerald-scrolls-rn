import { useState } from "react"

export function usePasswordViewModel() {
  const [password, setPassword] = useState('')

  const onChangePassword = (str: string) => {
    setPassword(str)
  }
  
  const checkPassword = (): boolean => {
    console.log('pass: ' + password)
    const res = password === '666'
    if (res) setPassword('')
    return res
  }

  return {
    password,
    checkPassword,
    onChangePassword,
  }
}