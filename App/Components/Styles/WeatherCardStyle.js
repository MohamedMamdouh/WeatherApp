import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    margin: 20,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: Colors.cloud
  },
  deleteBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempView: {
    flex: 4
  }
});
