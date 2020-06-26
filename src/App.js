import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { ThemeContext } from './config/Themes'
import Router from './config/Routes'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: null
        }
    }
    componentDidMount() {
        this.loadTheme()
    }
    loadTheme() {
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
        this.setStorage()
    }
    async setStorage() {
        try {
            await AsyncStorage.setItem('Theme', this.state.theme == "purple" ? "blue" : "purple")
        } catch (err) {

        }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }} >
                <Router screenProps={this.state.theme} />
            </ThemeContext.Provider>
        )
    }
}
