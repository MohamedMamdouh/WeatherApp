import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  cityText: {
    ...Fonts.style.h2,
    color: Colors.background
  },
  descView: {
    flexDirection: 'row'
  },
  descImage: {
    width: 40,
    height: 40
  },
  descText: {
    ...Fonts.style.h2,
    fontSize: 25
  },
  tempDetailsCard: {
    backgroundColor: Colors.cloud,
    marginRight: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 5
  },
  tempView: {
    flexDirection: 'row'
  },
  tempText: {
    ...Fonts.style.h4
  },
  tempTextDetails: {
    ...Fonts.style.h4
  },
  pressureView: {
    flexDirection: 'row'
  },
  pressureText: {
    ...Fonts.style.h4
  },
  pressureTextDetails: {
    ...Fonts.style.h4
  },
  humidityView: {
    flexDirection: 'row'
  },
  humidityText: {
    ...Fonts.style.h4
  },
  humidityTextDetails: {
    ...Fonts.style.h4
  },
  todayTempView: {
    flexDirection: 'row'
  },
  todayHTempText: {
    ...Fonts.style.h4
  },
  todayTempLText: {
    ...Fonts.style.h4
  },
  windView: {
    flexDirection: 'row'
  },
  windText: {
    ...Fonts.style.h4
  },
  windTextDetails: {
    ...Fonts.style.h4
  }
});
