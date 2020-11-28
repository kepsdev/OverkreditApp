import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import CategoryBanner from '../../organism/CategoryBanner';
import SearchBar from '../../organism/SearchBar';

const HomeScreen = () => {
    return (
        <View style={{marginBottom:50}}>
            <SearchBar title="Browse"/>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ marginBottom: 56 }}>
                        {/* Category */}
                        <CategoryBanner/>
                        {/* End Category */}



                        {/* Hot Product */}
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={{ marginTop: 30, alignSelf: 'center' }}>
                                <Text style={styles.Title}>TERBARU</Text>
                            </View>
                            <View style={{ width: '100%', height: 360, backgroundColor: '#2a9d8f', borderRadius: 10, marginTop: 20 }}>
                                <View>
                                    <View style={{ alignSelf: 'flex-end', marginTop: 15, marginRight: 10 }}>
                                        <TouchableOpacity>
                                            <Text style={{ borderColor: '#fff', color: '#fff', borderRadius: 5, borderWidth: 1, paddingHorizontal: 5, textAlign: 'center' }}>Lihat Semua</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <ScrollView horizontal={true}>
                                        <TouchableOpacity>
                                            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.52)', height: 280, width: 250, marginHorizontal: 10, marginTop: 10, borderRadius: 10 }}>
                                                <Image source={require('../../../assets/dummy/dum.png')} style={{ height: 180, width: 240, alignSelf: 'center', marginTop: 10, borderRadius: 10 }} />
                                                <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1, marginVertical: 10 }}>
                                                    <View>
                                                        <Text style={{ fontFamily: 'Lato-Bold', fontSize: 17, color: '#264653' }}>Rumah Murah sekali...</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontFamily: 'Lato', fontSize: 15, color: '#256A86', alignSelf: 'center' }}>Rp 200.000</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontFamily: 'Lato-Light', fontSize: 15, color: '#256A86', alignSelf: 'center' }}>Bekasi, Jawa barat</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.52)', height: 280, width: 250, marginHorizontal: 10, marginTop: 10, borderRadius: 10 }}>
                                                <Image source={require('../../../assets/dummy/dum.png')} style={{ height: 180, width: 240, alignSelf: 'center', marginTop: 10, borderRadius: 10 }} />
                                                <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1, marginVertical: 10 }}>
                                                    <View>
                                                        <Text style={{ fontFamily: 'Lato-Bold', fontSize: 17, color: '#264653' }}>Rumah Murah sekali...</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontFamily: 'Lato', fontSize: 15, color: '#256A86', alignSelf: 'center' }}>Rp 200.000</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontFamily: 'Lato-Light', fontSize: 15, color: '#256A86', alignSelf: 'center' }}>Bekasi, Jawa barat</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                        {/* End Hot Product */}


                        {/* New Product */}
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={{ marginTop: 30, alignSelf: 'center' }}>
                                <Text style={styles.Title}>SEMUA</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 20 }}>
                                <TouchableOpacity>
                                    <View style={{ borderRadius: 10, backgroundColor: '#2a9d8f', height: 240, width: 167, marginBottom: 20 }}>
                                        <Image source={require('../../../assets/dummy/dum.png')} style={{ width: 160, height: 150, alignSelf: 'center', marginTop: 10, borderRadius: 10 }} />
                                        <View style={{ marginHorizontal: 5, flexDirection: 'column' }}>
                                            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 15, color: '#264653', marginTop: 10 }}>Rumah murah sederh...</Text>
                                            <Text style={{ fontFamily: 'Lato', color: '#ebebeb', alignSelf: 'center', marginTop: 5 }}>Rp 200.000.000</Text>
                                            <Text style={{ fontFamily: 'Lato-Light', color: '#ebebeb', alignSelf: 'center', marginTop: 5 }}>Bekasi, Jawa Barat</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ borderRadius: 10, backgroundColor: '#2a9d8f', height: 240, width: 167, marginBottom: 20 }}>
                                        <Image source={require('../../../assets/dummy/dum.png')} style={{ width: 160, height: 150, alignSelf: 'center', marginTop: 10, borderRadius: 10 }} />
                                        <View style={{ marginHorizontal: 5, flexDirection: 'column' }}>
                                            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 15, color: '#264653', marginTop: 10 }}>Rumah murah sederh...</Text>
                                            <Text style={{ fontFamily: 'Lato', color: '#ebebeb', alignSelf: 'center', marginTop: 5 }}>Rp 200.000.000</Text>
                                            <Text style={{ fontFamily: 'Lato-Light', color: '#ebebeb', alignSelf: 'center', marginTop: 5 }}>Bekasi, Jawa Barat</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ borderRadius: 10, backgroundColor: '#2a9d8f', height: 240, width: 167, marginBottom: 20 }}>
                                        <Image source={require('../../../assets/dummy/dum.png')} style={{ width: 160, height: 150, alignSelf: 'center', marginTop: 10, borderRadius: 10 }} />
                                        <View style={{ marginHorizontal: 5, flexDirection: 'column' }}>
                                            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 15, color: '#264653', marginTop: 10 }}>Rumah murah sederh...</Text>
                                            <Text style={{ fontFamily: 'Lato', color: '#ebebeb', alignSelf: 'center', marginTop: 5 }}>Rp 200.000.000</Text>
                                            <Text style={{ fontFamily: 'Lato-Light', color: '#ebebeb', alignSelf: 'center', marginTop: 5 }}>Bekasi, Jawa Barat</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* End New Product */}



                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    Title: {
        fontFamily: 'Lato',
        fontSize: 20,
        color: '#264653',
        borderBottomWidth: 4,
        borderColor: '#264653',
    }
})
