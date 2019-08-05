import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, Image } from "react-native";
import styles from "./Styles/WeatherDetailsStyle";

export default class WeatherDetails extends Component {
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
        <View style={styles.descView}>
          <Text style={styles.descText}>clear sky </Text>
          <Image
            style={styles.descImage}
            source={{
              uri: "http://openweathermap.org/img/wn/10d@2x.png"
            }}
          />
        </View>
        <View style={styles.tempView}>
          <Text style={styles.tempText}>Temperature: </Text>
          <Text style={styles.tempTextDetails}>30°</Text>
        </View>
        <View style={styles.pressureView}>
          <Text style={styles.pressureText}>Pressure: </Text>
          <Text style={styles.pressureTextDetails}>1009</Text>
        </View>
        <View style={styles.humidityView}>
          <Text style={styles.humidityText}>Humidity: </Text>
          <Text style={styles.humidityTextDetails}>92%</Text>
        </View>
        <View style={styles.todayTempView}>
          <Text style={styles.todayHTempText}>40°H / </Text>
          <Text style={styles.todayTempLText}>20°L</Text>
        </View>
        <View style={styles.windView}>
          <Text style={styles.windText}>Wind Speed: </Text>
          <Text style={styles.windTextDetails}>1.45 mph</Text>
        </View>
      </View>
    );
  }
}
