import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from "react-native";
import styles from "./Styles/SearchButtonStyle";

export default class SearchButton extends Component {
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
      <TouchableOpacity style={styles.container}>
        <Text>Search</Text>
      </TouchableOpacity>
    );
  }
}
