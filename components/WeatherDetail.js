import React from 'react';
import { Text, View } from 'react-native';

export const WeatherDetail = ({ temp, location }) => {
  return (
    <View>
      <Text style={{ color: 'red' }}>
        {`${temp} ${location}`}
      </Text>
    </View>
  );
};
