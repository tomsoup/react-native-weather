import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import WeatherForm from './WeatherForm';
import WeatherDetail from './WeatherDetail';

class Weather extends Component {
  getTemperature = (location) => {
    // try {
    //   console.log('success', location);
    // } catch (error) {
    //   console.error(error);
    // }
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  };

  render() {
    return (
      <View>
        <Text>
          Find me in Weather
        </Text>
        <WeatherForm onSearch={ this.getTemperature }/>
        <WeatherDetail />

      </View>
    );
  }
}




export default Weather;
