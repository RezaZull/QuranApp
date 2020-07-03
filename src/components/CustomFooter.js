import React from 'react'
import { themes } from '../config/Themes'
import { Footer, FooterTab, Button, Text } from 'native-base';
import { Image } from 'react-native';
const p_Icon = require('../assets/p_icon.png')
const g_Icon = require('../assets/g_icon.png')
const b_Icon = require('../assets/b_icon.png')

export default function CustomFooter({ state, navigation, screenProps, ...props }) {
    const { routes = [], index: activeIndex } = state;
    const theme = screenProps.theme == 'blue' ? themes.blue : themes.purple
    const showImage = (isSelected) => {
        if (isSelected) {
            if (screenProps.theme == 'blue') {
                return b_Icon
            } else {
                return p_Icon
            }
        } else {
            return g_Icon
        }
    }
    return (
        <Footer>
            {routes.map((it, index) => {
                return (
                    <FooterTab style={{ backgroundColor: '#fff' }} key={index} >
                        <Button onPress={() => { navigation.jumpTo(it.name); }} >
                            {it.name == 'HomeRoute' ?
                                <Image source={showImage(activeIndex === index)} style={{ height: '125%', width: '125%', marginBottom: '25%' }} resizeMode='center' />
                                :
                                <Text style={{ color: activeIndex === index ? props.activeTintColor : props.inactiveTintColor }} >{props.descriptors[it.key].options.tabBarLabel}</Text>
                            }
                        </Button>
                    </FooterTab>
                );
            })}
        </Footer>
    );
}

