import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/WeatherCardStyle';

export default class WeatherCard extends Component {
  render() {
    const {
      data: {
        name,
        main: { temp_min, temp_max }
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.tempView}>
          <Text>{name}</Text>
          <Text>
            {temp_max}°H / {temp_min}°L
          </Text>
        </View>
      </View>
    );
  }
}
