import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themes } from './Themes'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Home from "../container/Home";
import CustomHeader from '../components/CustomHeader'
import CustomFooter from '../components/CustomFooter';
const pQuran = require('../assets/p_quran.png')

var themeProps
var theme
function home(prop) {
    return (<Home screenProps={themeProps} navigation={prop.navigation} />)
}
function routes(prop) {
    return (<Routes screenProps={themeProps} navigation={prop.navigation} />)
}

class Routes extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('FooterTab')
        }, 1000);
    }
    render() {
        const theme = themes.purple
        return (
            <View style={{ flex: 1 }} >
                <Image source={pQuran} style={{ width: '100%', height: hp('80%') }} resizeMode='cover' />
                <Text style={{ color: theme.primary, fontSize: wp('8%'), fontWeight: 'bold', textAlign: 'center' }} >Quran App</Text>
            </View >
        )
    }
}
const StackHome = createStackNavigator()
function HomeRoute() {
    return (
        <StackHome.Navigator>
            <Stack.Screen
                name="Home"
                component={home}
                options={{
                    headerTitle: 'Quran App',
                    header: (props) => <CustomHeader {...props} screenProps={themeProps} />
                }}
            />
        </StackHome.Navigator>
    )

}
const Tab = createBottomTabNavigator()
function dumb(props) {
    return (
        <View><Text>{props.route.name}</Text></View>
    )
}
function footerTab() {
    return (
        <Tab.Navigator
            initialRouteName="HomeRoute"
            tabBarOptions={{
                activeTintColor: theme.primary,
                inactiveTintColor: '#bdc3c7'
            }}
            tabBar={(props) => <CustomFooter {...props} screenProps={themeProps} />}
        >
            <Tab.Screen
                name="BookMark"
                component={dumb}
                options={{
                    tabBarLabel: "Bookmark"
                }}
            />
            <Tab.Screen
                name="HomeRoute"
                component={HomeRoute}
                options={{
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen
                name="Setting"
                component={dumb}
                options={{
                    tabBarLabel: "Setting"
                }}
            />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator()
function Route({ screenProps }) {
    themeProps = screenProps
    theme = screenProps.theme == 'blue' ? themes.blue : themes.purple
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="Routes"
                    component={routes}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FooterTab"
                    component={footerTab}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Route
