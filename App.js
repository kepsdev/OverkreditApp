import React, { Component } from 'react'
import { Text, View, ActivityIndicator,StatusBar } from 'react-native'
import * as Font from 'expo-font'
import DefaultScreen from './src'

export class App extends Component {
  constructor(){
    super()
    this.state={
      fontLoaded:false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'Lato':require('./src/assets/fonts/Lato-Regular.ttf'),
      'Lato-Black':require('./src/assets/fonts/Lato-Black.ttf'),
      'Lato-Light':require('./src/assets/fonts/Lato-Light.ttf'),
      'Lato-Bold':require('./src/assets/fonts/Lato-Bold.ttf'),
    });
    this.setState({fontLoaded:false});
  }
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true} />
        {this.state.fontLoaded?(
        <DefaultScreen/>
        ) : (
          <View style={{justifyContent: 'center', alignContent:'center',alignSelf:'center',flex:1}}>
            <ActivityIndicator size="large" color="#000000" />
          </View>
        )}
      </View>
    )
  }
}

export default App
