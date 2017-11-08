import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

class WeatherDetail extends Component {


  render() {

    return (
      <View>
        <Text style={{ color: 'red' }}>
          {`${this.props.temp} ${this.props.location}`}
        </Text>
      </View>
    );
  }
}

export default WeatherDetail;
