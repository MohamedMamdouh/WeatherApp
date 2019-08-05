import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from './Styles/SearchInputStyle';

export default class SearchInput extends Component {
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
        <TextInput
          placeholder="Enter Your City"
          clearButtonMode="always"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize={false}
        />
      </View>
    );
  }
}
