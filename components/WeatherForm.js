import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = { location: '' };
  }

  onFormSubmit = () => {
    const { location } = this.state;

    if (location.length > 0) {
      this.setState({ location: '' });
      this.props.onSearch(location);
    }
  }

  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, borderRadius: 30, paddingLeft: 10, backgroundColor: '#ffffff' }}
        onChangeText={(location) => this.setState({ location })}
        value={this.state.location}
        />
      <Button
        onPress={this.onFormSubmit}
        title="Submit"
        color="#841584"
        accessibilityLabel="Click to search weather"
      />


      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 20
  }
};

export default WeatherForm;
