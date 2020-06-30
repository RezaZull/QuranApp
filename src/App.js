import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { ThemeContext, themes } from './config/Themes'
import Routes from './config/Routes'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: null
        }
    }
    async componentDidMount() {
        await this.loadTheme()
    }
    async loadTheme() {
        try {
            if (this.state.theme == null) {
                let hours = new Date().getHours()
                let mode = hours > 13 ? "purple" : "blue"
                this.setState({ theme: mode })
            }
        } catch (err) {

        }
    }
    toggleTheme = () => {
        this.setState((({ theme }) => ({
            theme: theme === "purple" ? "blue" : "purple"
        })))
    }
    render() {
        if (this.state.theme != null) {
            return (
                <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }} >
                    <Routes screenProps={{ theme: this.state.theme }} />
                </ThemeContext.Provider>
            )
        } else {
            return null
        }
    }
}
