import { StyleSheet } from "react-native";
import { borderColor, margin, backgrounds } from "polished";

export default StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderRadius: 8,
    borderWidth: 2,
    margin: 20,
    backgroundColor: "#FFF"
  },
  textInput: {
    width: 280
  }
});
