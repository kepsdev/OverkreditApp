import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TitleH4 = (props) => {
    return (
        <View style={{ marginTop: 30, alignSelf: 'center' }}>
            <Text style={styles.Title}>{props.title}</Text>
        </View>
    )
}

export default TitleH4

const styles = StyleSheet.create({
    Title: {
        fontFamily: 'Lato',
        fontSize: 20,
        color: '#264653',
        borderBottomWidth: 4,
        borderColor: '#264653',
    }
})
