import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import TitleH4 from '../../atom/TitleH4';
import CatIcon from '../../molecule/CatIcon';

const CategoryBanner = () => {
    return (
        <View>
           <TitleH4 title="OVERKREDIT"/>
            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <CatIcon name="home" title="RUMAH" />
                <CatIcon name="building" title="APARTEMEN" />
                <CatIcon name="car" title="MOBIL" />
                <CatIcon name="motorcycle" title="MOTOR" />
            </View>
        </View>
    )
}

export default CategoryBanner

const styles = StyleSheet.create({

})
