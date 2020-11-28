import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import HomeScreen from './structure/screen/HomeScreen'
import { AntDesign } from '@expo/vector-icons';

const DefaultScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{flex:1}}>
                <HomeScreen/>
            </View>
            <View>
                <View style={{marginHorizontal: 10,height:50,backgroundColor: 'rgba(255, 255, 255, 0.8)',borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{alignItems: 'center',justifyContent: 'center',marginHorizontal: 10}}>
                        <AntDesign name="isv" size={24} color="#828282" />
                        <Text style={{fontFamily: 'Lato',color:'#828282',fontSize:13,marginTop:5}}>Explore</Text>
                    </View>
                    <View style={{alignItems: 'center',justifyContent: 'center',marginHorizontal: 10}}>
                        <AntDesign name="home" size={18} color="#2a9d8f" />
                        <Text style={{fontFamily: 'Lato-Light',color:'#2a9d8f',fontSize:13,marginTop:5}}>Home</Text>
                    </View>
                    <View style={{alignItems: 'center',justifyContent: 'center',marginHorizontal: 10}}>
                        <AntDesign name="user" size={18} color="#2a9d8f" />
                        <Text style={{fontFamily: 'Lato-Light',color:'#2a9d8f',fontSize:13,marginTop:5}}>User</Text>
                    </View>

                </View>

            </View>
        </View>
    )
}

export default DefaultScreen

const styles = StyleSheet.create({})
