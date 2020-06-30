import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../container/Home";

const Stack = createStackNavigator()
var themeProps
function home() {

    return (<Home screenProps={themeProps} />)
}
function routes(item) {
    return (<Routes screenProps={themeProps} />)
}

class Routes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View >
                <Text>{this.props.screenProps.theme}</Text>
            </View >
        )
    }
}

function Route({ screenProps }) {
    themeProps = screenProps
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="Routes"
                    component={routes}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={home}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Route
