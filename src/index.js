import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

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
                </View>
            </View>
            {/* End Search Bar */}

            {/* Category */}
            <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,alignContent:'center',alignSelf:'center',alignItems:'center'}}>
                <View style={{backgroundColor:'#cd5334',height:120,width:120}}>
                    <Text style={{color:'#fff',fontFamily:'Lato-Light'}}>RUMAH</Text>
                </View>
                <View style={{backgroundColor:'#cd5334',height:120,width:120}}>
                    <Text style={{color:'#fff',fontFamily:'Lato-Light'}}>RUMAH</Text>
                </View>
                <View style={{backgroundColor:'#cd5334',height:120,width:120}}>
                    <Text style={{color:'#fff',fontFamily:'Lato-Light'}}>RUMAH</Text>
                </View>
                <View style={{backgroundColor:'#cd5334',height:120,width:120}}>
                    <Text style={{color:'#fff',fontFamily:'Lato-Light'}}>RUMAH</Text>
                </View>
            </View>
            {/* End Category */}
        </View>
    )
}

export default DefaultScreen

const styles = StyleSheet.create({
    SearchTitle: {
        fontFamily: 'Lato-Black',
        fontSize : 35,
        marginTop: 10
    },
    SearchInput: {
        fontFamily: 'Lato-Light',
        marginTop: 20,
        borderWidth: 0.5,
        width: 170,
        fontSize:12,
        borderRadius: 7,
        paddingLeft: 30,
        paddingRight: 10
    }
})
