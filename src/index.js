import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

const DefaultScreen = () => {
    return (
        <View>
            {/* Search Bar */}
            <View style={{flexDirection: 'row',justifyContent:'space-between',marginHorizontal:10}}>
                <View>
                    <Text style={styles.SearchTitle}>Browse</Text>
                </View>
                <View>
                    <TextInput placeholder="Masukan Pencarian" style={styles.SearchInput}/>
                    <View style={styles.SearchIcon}>
                     <FontAwesome5 name="search" size={15} color="#264653"/>
                    </View>
                </View>
            </View>
            {/* End Search Bar */}
            <SafeAreaView>
                <ScrollView>
                    {/* Category */}
                    <View style={{marginTop:30,alignSelf: 'center'}}>
                        <Text style={styles.Title}>OVERKREDIT</Text>
                    </View>
                    <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
                        <TouchableOpacity>
                        <View style={{borderRadius:8,backgroundColor:'#2a9d8f',height:80,width:80,justifyContent:'center',alignItems:'center'}}>
                            <FontAwesome5 name="home" size={24} color="white" />
                            <Text style={{color:'#fff',fontFamily:'Lato-Light',paddingTop:5}}>RUMAH</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{borderRadius:8,backgroundColor:'#2a9d8f',height:80,width:80,justifyContent:'center',alignItems:'center'}}>
                            <FontAwesome5 name="building" size={24} color="white" />
                            <Text style={{color:'#fff',fontFamily:'Lato-Light',paddingTop:5}}>RUMAH</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{borderRadius:8,backgroundColor:'#2a9d8f',height:80,width:80,justifyContent:'center',alignItems:'center'}}>
                            <FontAwesome5 name="car-alt" size={24} color="white" />
                            <Text style={{color:'#fff',fontFamily:'Lato-Light',paddingTop:5}}>RUMAH</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{borderRadius:8,backgroundColor:'#2a9d8f',height:80,width:80,justifyContent:'center',alignItems:'center'}}>
                            <FontAwesome5 name="motorcycle" size={24} color="white" />
                            <Text style={{color:'#fff',fontFamily:'Lato-Light',paddingTop:5}}>RUMAH</Text>
                        </View>
                        </TouchableOpacity>
                        
                    </View>
                    {/* End Category */}



                    {/* Hot Product */}
                    <View style={{marginHorizontal:10}}>
                        <View style={{marginTop:30,alignSelf: 'center'}}>
                            <Text style={styles.Title}>TERBARU</Text>
                        </View>
                        <View>
                        <View>
                            <View style={{alignSelf:'flex-end'}}>
                                <TouchableOpacity>
                                <Text style={{borderColor:'#264653',color:'#264653',borderRadius:5,borderWidth:1,paddingHorizontal:5,textAlign:'center'}}>Lihat Semua</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <SafeAreaView>
                            <ScrollView horizontal={true}>
                                <TouchableOpacity>
                                    <View>
                                        
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </SafeAreaView>
                        </View>
                    </View>
                    {/* End Hot Product */}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default DefaultScreen

const styles = StyleSheet.create({
    SearchTitle: {
        fontFamily: 'Lato-Black',
        fontSize : 35,
        marginTop: 10,
        color: '#264653'
    },
    SearchInput: {
        fontFamily: 'Lato-Light',
        marginTop: 20,
        borderWidth: 0.5,
        width: 170,
        fontSize:12,
        borderRadius: 7,
        paddingLeft: 30,
        paddingRight: 10,
        borderColor: '#264653',
        color: '#264653',
        position:'relative'
    },
    SearchIcon: {
        top:26,
        left:6,
        position:'absolute'
    },
    Title: {
        fontFamily:'Lato',
        fontSize:20,
        color: '#264653',
        borderBottomWidth:4,
        borderColor: '#264653',
    }
})
