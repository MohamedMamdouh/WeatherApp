import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from './Styles/SearchInputStyle';

export default class SearchInput extends Component {
  // Prop type warnings
  static propTypes = {
    onChangeText: PropTypes.func.isRequired
  };

  render() {
    const { onChangeText } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Your City"
          clearButtonMode="always"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize={false}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}
