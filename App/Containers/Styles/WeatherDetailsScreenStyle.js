import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 20
  }
});
