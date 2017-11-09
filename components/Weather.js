import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import WeatherForm from './WeatherForm';
import { WeatherDetail } from './WeatherDetail';
import { getTemp } from '../api/openWeatherapi';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      temp: '',
      location: '',
      condition: '',
      description: '',
      fahrenheit: true
    };
  }

  onSearch = (zip) => {
    this.setState({ loading: true });
    getTemp(zip).then((data) => {
     this.setState({ temp: data.main.temp, location: data.name, description: data.weather[0].description, condition: data.weather[0].main, loading: false });
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

  setMetric(fahrenheit) {
    this.setState({ fahrenheit });
  }

  converter = (fahrenheit) => {
    const intTemperature = parseInt(this.state.temp, 10);
    if (fahrenheit) {
      return String(Math.round(((intTemperature * 9) / 5) - 459.67));
    }
    return String(Math.round(intTemperature - 273.15));
  };

  render() {
    const { loading, temp, location, condition, description, fahrenheit } = this.state;

    const renderIcon = (weatherCondition) => {
      switch (weatherCondition) {
        case 'Thunderstorm':
            return 'weather-lightning';
        case 'Drizzle':
            return 'weather-rainy';
        case 'Rain':
            return 'weather-pouring';
        case 'Snow':
            return 'weather-snowy';
        case 'Atmosphere':
            return 'weather-fog';
        case 'Clear':
            return 'weather-sunny';
        case 'Clouds':
            return 'weather-cloudy';
        case 'Extreme':
            return 'weather-windy';
        case 'Additional':
            return 'weather-windy-variant';
        case 'Mist':
            return 'weather-fog';
        default:
          return 'weather-sunny';
      }
    };

    const renderTemp = (metricUnit) => {
      return this.converter(metricUnit);
    };

    const renderDetail = () => {
      if (loading) {
        return <Text> Getting Weather...</Text>;
      } else if (temp && location) {
        return (
          <WeatherDetail
            temp={renderTemp(fahrenheit)}
            description={description}
            icon={renderIcon(condition)}
            location={location}
            name={location}
            metricUnit={'F'}
            onTempPress={() => {
                this.setMetric(!fahrenheit);
            }}
            fahrenheit={fahrenheit}
          />
        );
      }
    };


    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={{ fontSize: 24, color: '#555555', fontWeight: '900' }}>
          Weather App
        </Text>
        <WeatherForm onSearch={this.onSearch} />
        {renderDetail()}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 50,
    alignItems: 'center',
  }
};


export default Weather;
