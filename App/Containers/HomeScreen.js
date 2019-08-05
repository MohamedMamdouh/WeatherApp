import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Images } from '../Themes';
import SearchButton from '../Components/SearchButton';
import SearchInput from '../Components/SearchInput';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
import SearchActions from '../Redux/SearchRedux';

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {
  render() {
    const { searchSubmit, onSearchTermChange } = this.props;
    console.log('--this.props--', this.props);
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <View style={styles.centeredView}>
          <SearchInput onChangeText={onSearchTermChange} />
          <SearchButton onSubmit={searchSubmit} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { search } = state;
  return {
    search: search
  };
};

const mapDispatchToProps = dispatch => {
  const { search: searchAction, onSearchTermChange } = SearchActions;
  return {
    searchSubmit: () => dispatch(searchAction()),
    onSearchTermChange: val => dispatch(onSearchTermChange(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
