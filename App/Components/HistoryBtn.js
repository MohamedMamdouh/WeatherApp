import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Styles/HistoryBtnStyle';

export default class HistoryBtn extends Component {
  // Prop type warnings
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onSubmit}>
        <Text>History</Text>
      </TouchableOpacity>
    );
  }
}
