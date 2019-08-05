import React, { Component } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Images } from "../Themes";
import SearchButton from "../Components/SearchButton";
import SearchInput from "../Components/SearchInput";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <View style={styles.centeredView}>
          <SearchInput />
          <SearchButton />
        </View>
      </View>
    );
  }
}
