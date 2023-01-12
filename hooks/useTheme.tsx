import { useState } from 'react'
const useTheme = () => {
  const [theme, setTheme] = useState(null)
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return {
    theme,
    setTheme,
    handleThemeSwitch
  }
}
export default useTheme
