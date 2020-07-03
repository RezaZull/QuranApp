import React from 'react'

const purple = '#875BCA'
const blue = '#6CC0ED'

export const themes = {
    purple: {
        primary: purple,
        boldText: '#4B396E',
        paraText: '#9FA1B7',
        gradient: ['#BB77E6', '#975AFF']
    },
    blue: {
        primary: blue,
        boldText: '#2EA1F1',
        paraText: '#89B0AE',
        gradient: ['#2ea1f1', '#645bfc']

    }
}
export const ThemeContext = React.createContext({
    theme: themes.theme1,
    toggleTheme: () => { }
})