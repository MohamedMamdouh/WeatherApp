import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './Styles/WeatherDetailsStyle';

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
    const {
      result: {
        name,
        weather,
        wind: { speed },
        main: { humidity, pressure, temp, temp_max, temp_min }
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.cityView}>
          <Text style={styles.cityText}> {name}</Text>
        </View>
        <View style={styles.descView}>
          <Text style={styles.descText}> {weather[0].description} </Text>
          <Image
            style={styles.descImage}
            source={{
              uri: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
            }}
          />
        </View>
        <View style={styles.tempDetailsCard}>
          <View style={styles.tempView}>
            <Text style={styles.tempText}>Temperature: </Text>
            <Text style={styles.tempTextDetails}>{temp}°</Text>
          </View>
          <View style={styles.pressureView}>
            <Text style={styles.pressureText}>Pressure: </Text>
            <Text style={styles.pressureTextDetails}>{pressure}</Text>
          </View>
          <View style={styles.humidityView}>
            <Text style={styles.humidityText}>Humidity: </Text>
            <Text style={styles.humidityTextDetails}>{humidity}%</Text>
          </View>
          <View style={styles.todayTempView}>
            <Text style={styles.todayHTempText}>{temp_max}°H / </Text>
            <Text style={styles.todayTempLText}>{temp_min}°L</Text>
          </View>
          <View style={styles.windView}>
            <Text style={styles.windText}>Wind Speed: </Text>
            <Text style={styles.windTextDetails}>{speed} mph</Text>
          </View>
        </View>
      </View>
    );
  }
}
