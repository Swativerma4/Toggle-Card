import {createContext,useContext} from 'react';
 export const themeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},


 })
  
  //provider
  export const ThemeProvider=themeContext.Provider

export default function theme() {
  return useContext(themeContext)
}
