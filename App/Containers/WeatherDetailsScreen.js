import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Images } from '../Themes';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import WeatherDetails from '../Components/WeatherDetails';

// Styles
import styles from './Styles/WeatherDetailsScreenStyle';

class WeatherDetailsScreen extends Component {
  render() {
    const { result } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.container}>
          <WeatherDetails result={result} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    search: { result }
  } = state;
  return {
    result
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherDetailsScreen);
