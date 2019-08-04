import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    alignItems: 'center',
    justifyContent:'center',
  },
  centeredView:{
    alignItems: 'center',
    justifyContent:'center',
  }
})
