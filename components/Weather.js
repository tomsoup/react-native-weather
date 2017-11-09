import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import WeatherForm from './WeatherForm';
import { WeatherDetail } from './WeatherDetail';
import { getTemp } from '../api/openWeatherapi';


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  onSearch = (location) => {
    this.setState({ loading: true });
    getTemp(location).then((temp) => {
     this.setState({ location, temp, loading: false });
    }, (error) => {
      console.log(error);
      Alert.alert(
        'Error',
        `No City Found`,
        [
          {
            text: 'OK',
            onPress: () => this.setState({
              loading: false
            })
          }
        ],
        {
          cancelable: false
        }
      );
     }
    );
  };
  render() {
    const { loading, temp, location } = this.state;
    const renderDetail = () => {
      if (loading) {
        return <Text> Getting Weather...</Text>;
      } else if (temp && location) {
        return <WeatherDetail temp={temp} location={location} />;
      }
    };
    return (
      <View>
        <Text>
          Find me in Weather
        </Text>
        <WeatherForm onSearch={this.onSearch} />
        {renderDetail()}
      </View>
    );
  }
}


export default Weather;
