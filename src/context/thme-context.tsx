"use client";
import {createContext, useContext, useState, Dispatch, SetStateAction} from 'react'

interface contextProps{
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>;
    toggleSidebar: Dispatch<SetStateAction<void>>;
    openSidebar:boolean,
}

const ThemeContext = createContext<contextProps>({
    theme: 'light',
    setTheme: () => {},
    toggleSidebar: () => {},
    openSidebar:true
})

export function GlobalThemeContextProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<string>('light')
    const [openSidebar, setOpenSidebar] = useState(true);
    const toggleSidebar = ()=>{
        setOpenSidebar(!openSidebar);
    }
  return (
   <ThemeContext.Provider value={{
    theme,
    setTheme,
    openSidebar,
    toggleSidebar
   }} >
    {children}
   </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
 