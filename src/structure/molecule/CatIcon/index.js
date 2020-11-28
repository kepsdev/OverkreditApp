import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const CatIcon = (props) => {
    return (
        <View>
            <TouchableOpacity>
                <View style={styles.container}>
                    <FontAwesome5 name={props.name} size={24} color="white" />
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CatIcon

const styles = StyleSheet.create({
    title :{
        color: '#fff',
        fontFamily: 'Lato-Light',
        paddingTop: 5
    },
    container: {
        borderRadius: 8,
        backgroundColor: '#2a9d8f', 
        height: 80, 
        width: 80, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})
