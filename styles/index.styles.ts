import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { COLORS } from "./colors";

const containerStyles: { container: ViewStyle } = {
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
};

const textStyles: { text: TextStyle } = {
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.text,
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
    color: COLORS.button.text,
    backgroundColor: COLORS.button.background,
    borderRadius: 30,
    padding: 20
  },
};

const iconStyles = StyleSheet.create({
  icon: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

const imageStyles = StyleSheet.create({
  image: {
    width: 200,
    height: 60,
    marginTop: -10, 
  },
});

export const homeStyles = StyleSheet.create({
  ...containerStyles,
  ...textStyles,
  ...buttonStyles,
  ...buttonTextStyles,
  ...iconStyles,
  ...imageStyles,
});