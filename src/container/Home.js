import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { themes } from '../config/Themes'
import { Content, Card, Icon, } from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient';
const quran = require('../assets/r_quran.png')

export default class Home extends Component {
    render() {
        const theme = this.props.screenProps.theme == 'purple' ? themes.purple : themes.blue;
        return (
            <Content padder >
                <View style={{ marginBottom: hp('3.5%') }} >
                    <Text style={{ fontSize: wp('4.3%'), color: theme.paraText, marginBottom: hp('0.5%') }} > Assalamualaikum </Text>
                    <Text style={{ fontSize: wp('5.3%'), fontWeight: 'bold', color: theme.boldText }} > Reza Zuliansyah </Text>
                </View>
                <View>
                    <LinearGradient
                        colors={theme.gradient}
                        style={{ flexDirection: 'row', borderRadius: 12, height: hp('16.5%') }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={[styles.cardRow, { margin: '3%', justifyContent: 'space-around' }]} >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Icon name='book-open' type='FontAwesome5' style={{ fontSize: wp('3.3%'), marginRight: wp('1.5%'), color: '#fff' }} />
                                <Text style={{ color: '#fff' }} >last read</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: wp('4.3%'), fontWeight: 'bold' }}>Al-Fatiah</Text>
                                <Text style={{ color: '#fff', fontSize: wp('3.5%') }}>Ayah No: 1</Text>
                            </View>
                        </View>
                        <View style={[styles.cardRow, { overflow: 'hidden', justifyContent: 'flex-end' }]} >
                            <Image source={quran} style={{ height: 100, width: '90%', left: '10%', }} />
                        </View>
                    </LinearGradient>
                </View>
            </Content>
        )
    }
}
const styles = StyleSheet.create({
    cardRow: {
        flex: 1,
    }
})