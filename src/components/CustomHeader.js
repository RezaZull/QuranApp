import React from 'react'
import { View, Text } from 'react-native'
import { Header, Left, Right, Icon } from 'native-base'
import { themes } from "../config/Themes";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
export default function CustomHeader({ screenProps, scene }) {
    const theme = screenProps.theme == 'blue' ? themes.blue : themes.purple
    return (
        <Header
            androidStatusBarColor={"rgba(0,0,0,0.5)"}
            style={{ backgroundColor: '#fff' }}
        >
            <Left>
                <Text style={{ fontSize: wp('4.8%'), fontWeight: 'bold', color: theme.primary }} >{scene.descriptor.options.headerTitle}</Text>
            </Left>
            <Right>
                <Icon
                    type='FontAwesome5'
                    name='search'
                    style={{ fontSize: wp('5%'), color: theme.primary }}
                />
            </Right>
        </Header>
    )
}
