import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen';
import WeatherHistoryListScreen from '../Containers/WeatherHistoryListScreen';
import WeatherDetailsScreen from '../Containers/WeatherDetailsScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    WeatherHistoryListScreen: { screen: WeatherHistoryListScreen },
    WeatherDetailsScreen: { screen: WeatherDetailsScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
