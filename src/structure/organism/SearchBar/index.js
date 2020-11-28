import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = (props) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <View>
                    <Text style={styles.SearchTitle}>{props.title}</Text>
                </View>
                <View>
                    <TextInput placeholder="Masukan Pencarian" style={styles.SearchInput} />
                    <View style={styles.SearchIcon}>
                        <FontAwesome5 name="search" size={15} color="#264653" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    SearchTitle: {
        fontFamily: 'Lato-Black',
        fontSize: 35,
        marginTop: 10,
        color: '#264653'
    },
    SearchInput: {
        fontFamily: 'Lato-Light',
        marginTop: 20,
        borderWidth: 0.5,
        width: 170,
        fontSize: 12,
        borderRadius: 7,
        paddingLeft: 30,
        paddingRight: 10,
        borderColor: '#264653',
        color: '#264653',
        position: 'relative'
    },
    SearchIcon: {
        top: 26,
        left: 6,
        position: 'absolute'
    }
})
