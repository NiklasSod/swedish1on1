import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const containerStyles: { container: ViewStyle } = {
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#d3effeff",
  },
};

const textStyles: { text: TextStyle } = {
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
};

const buttonStyles: { button: ViewStyle } = {
  button: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
    margin: 20,
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

export const homeStyles = StyleSheet.create({
  ...containerStyles,
  ...textStyles,
  ...buttonStyles,
  ...buttonTextStyles,
});