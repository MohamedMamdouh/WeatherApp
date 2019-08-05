import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
