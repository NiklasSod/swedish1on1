import { StyleSheet, ViewStyle, TextStyle } from "react-native";

const containerStyles: { container: ViewStyle } = {
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#d3effeff",
  },
};

const buttonTextStyles: { buttonText: TextStyle } = {
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#a0d8ef",
    borderRadius: 30,
    padding: 20
  },
};

export const registerStyles = StyleSheet.create({
  ...containerStyles,
  ...buttonTextStyles,
});