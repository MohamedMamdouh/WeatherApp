import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/SearchButtonStyle';

export default class SearchButton extends Component {
  // Prop type warnings
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onSubmit}>
        <Text>Search</Text>
      </TouchableOpacity>
    );
  }
}
