import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import WeatherForm from './WeatherForm';
import WeatherDetail from './WeatherDetail';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { location: 'New York', temp: 88 };
  }
  getTemperature = (location) => {
    this.setState({
      location,
      temp: 24
    })
  };

  render() {
    const { temp, location } = this.state;
    return (
      <View>
        <Text>
          Find me in Weather
        </Text>
        <WeatherForm onSearch={ this.getTemperature }/>
        <WeatherDetail location={this.state.location} temp={this.state.temp}/>

      </View>
    );
  }
}




export default Weather;
