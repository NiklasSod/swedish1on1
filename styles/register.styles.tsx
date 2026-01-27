import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { COLORS } from "./colors";

const containerStyles: { container: ViewStyle } = {
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
};

const buttonTextStyles: { buttonText: TextStyle } = {
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.button.text,
    backgroundColor: COLORS.button.background,
    borderRadius: 30,
    padding: 20
  },
};

export const registerStyles = StyleSheet.create({
  ...containerStyles,
  ...buttonTextStyles,
});