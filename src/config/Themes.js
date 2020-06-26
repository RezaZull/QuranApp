import React from 'react'

const purple = '#875BCA'
const blue = '#6CC0ED'

const themes = {
    purple: {
        primary: purple
    },
    blue: {
        primary: blue
    }
}
export const ThemeContext = React.createContext({
    theme: themes.theme1,
    toggleTheme: () => { }
})