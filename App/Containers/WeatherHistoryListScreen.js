import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Images } from '../Themes';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import WeatherCard from '../Components/WeatherCard';

// Styles
import styles from './Styles/WeatherHistoryListScreenStyle';

class WeatherHistoryListScreen extends Component {
  render() {
    const {
      searchHistory: { searchHistoryData }
    } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.container}>
          <ScrollView>
            {searchHistoryData.map(i => (
              <WeatherCard data={i} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { searchHistory } = state;
  return {
    searchHistory
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherHistoryListScreen);
