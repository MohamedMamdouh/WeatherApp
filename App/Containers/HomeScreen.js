import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Images } from '../Themes';
import SearchButton from '../Components/SearchButton';
import SearchInput from '../Components/SearchInput';
import Error from '../Components/Error';
import HistoryBtn from '../Components/HistoryBtn';
import { connect } from 'react-redux';
import SearchActions from '../Redux/SearchRedux';
import SearchHistoryActions from '../Redux/SearchHistoryRedux';

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {
  render() {
    const {
      searchSubmit,
      onSearchTermChange,
      searchHistorySubmit,
      state
    } = this.props;
    const error = state.search.error || state.searchHistory.error;
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <View style={styles.centeredView}>
          {error ? <Error message={error.message} /> : null}
          <SearchInput onChangeText={onSearchTermChange} />
          <SearchButton onSubmit={searchSubmit} />
          <HistoryBtn onSubmit={searchHistorySubmit} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  const { search: searchAction, onSearchTermChange } = SearchActions;
  const { historySearch: searchHistoryAction } = SearchHistoryActions;
  return {
    searchSubmit: () => dispatch(searchAction()),
    onSearchTermChange: val => dispatch(onSearchTermChange(val)),
    searchHistorySubmit: () => dispatch(searchHistoryAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
