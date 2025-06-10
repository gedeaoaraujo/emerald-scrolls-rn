import { createContext, useState } from "react"

const registeredPassword: string = '666'

export const PasswordContext = createContext({
  password: '',
  checkPassword: (): boolean => false,
  onChangePassword: (str: string) => {},
})

export function PasswordProvider({ children }) {
  const [password, setPassword] = useState('')

  const onChangePassword = (str: string) => setPassword(str)
  
  const checkPassword = (): boolean => {
    const res = password === registeredPassword
    if (res) setPassword('')
    return res
  }

  return (
    <PasswordContext value={{ 
      password, onChangePassword, checkPassword
    }}>
      {children}
    </PasswordContext>
  )
}