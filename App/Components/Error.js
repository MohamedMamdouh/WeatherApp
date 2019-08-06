import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/ErrorStyle';

export default class Error extends Component {
  // // Prop type warnings
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  render() {
    const { message } = this.props;
    return (
      <View style={styles.container}>
        <Text>{message}</Text>
      </View>
    );
  }
}
