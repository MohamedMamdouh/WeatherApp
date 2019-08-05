import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.border,
    borderRadius: 8,
    borderWidth: 2,
    margin: 20,
    backgroundColor: Colors.snow
  },
  textInput: {
    width: 280
  }
});
