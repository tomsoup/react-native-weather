import React from 'react';
import { Text, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export const WeatherDetail = ({ temp, icon, name, description, onTempPress, fahrenheit }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 36, color: '#555555' }}>
        {name}
      </Text>
      <Icon
        name={icon}
        type='material-community'
        color='#555555'
        size={150}
      />
      <Text style={styles.fontStyle}>
        {`${description}`}
      </Text>
      <Button
        backgroundColor='transparent'
        iconRight
        color='#555555'
        icon={{ name: `${fahrenheit ? 'temperature-fahrenheit' : 'temperature-celsius'}`, type: 'material-community', color: '#1289b2', fontSize: 18 }}
        title={temp}
        onPress={onTempPress}
      />
    </View>
  );
};

const styles = {
  fontStyle: {
    color: '#555555',
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 0
  }
};
