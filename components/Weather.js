import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import axios from 'axios';
import { OPEN_MAP_API } from 'react-native-dotenv';

const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${ OPEN_MAP_API }`;
import WeatherForm from './WeatherForm';
import WeatherDetail from './WeatherDetail';
import { getTemp } from '../api/openWeatherapi';



class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { location: 'New York', temp: 88 };
  }
  onSearch = (location) => {
    getTemp(location).then((temp) => {
      if (temp) {
        return this.setState({ location, temp });
      }
      return console.log('error');
    }).catch((err) => {
       console.log('err');
     }
    );

  };
  render() {
    const { temp, location } = this.state;
    return (
      <View>
        <Text>
          Find me in Weather
        </Text>
        <WeatherForm onSearch={ this.onSearch }/>
        <WeatherDetail location={this.state.location} temp={this.state.temp}/>
      </View>
    );
  }
}




export default Weather;
