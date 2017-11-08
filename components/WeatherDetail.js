import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

class WeatherDetail extends Component {


  render() {
    return (
      <View>
        <Text style={{ color: 'red' }}>
          It is now 40c in New York
        </Text>
      </View>
    );
  }
}

export default WeatherDetail;
