import React, { Component } from 'react'
import { Text, View, ActivityIndicator,StatusBar } from 'react-native'
import {Font} from 'expo'
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
    this.setState({fontLoaded:true});
  }
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        {this.state.fontLoaded?(
        <DefaultScreen/>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    )
  }
}

export default App
