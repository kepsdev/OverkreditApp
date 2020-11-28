import React from 'react'
import { View,StyleSheet } from 'react-native'
import HomeScreen from './structure/screen/HomeScreen'

const DefaultScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <HomeScreen/>
        </View>
    )
}

export default DefaultScreen

const styles = StyleSheet.create({})
