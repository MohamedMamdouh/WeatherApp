import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/WeatherCardStyle';

export default class WeatherCard extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tempView}>
          <Text>Cairo</Text>
          <Text>40°H / 20°L</Text>
        </View>
        <TouchableOpacity style={styles.deleteBtn}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
