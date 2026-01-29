import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

const imageStyles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 320,
    zIndex: -1,
  },
});

const titleTextStyle = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "flex-start",
    padding: 10,
  },
});

const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 200,
  },
});

const innerContainerStyle = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    marginHorizontal: 20,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    backgroundColor: COLORS.form.background,
  },
});

const registerLinkStyle = StyleSheet.create({
  registerLink: {
    fontSize: 16,
    margin: 8,
    padding: 12,
    paddingHorizontal: 24,
    color: COLORS.button.btnBorder,
    textDecorationLine: "none",
    borderWidth: 2,
    borderRadius: 50,
    borderColor: COLORS.button.btnBorder,
  },
});

const loginLinkStyle = StyleSheet.create({
  loginLink: {
    fontSize: 20,
    margin: 8,
    marginBottom: 16,
    padding: 8,
    paddingHorizontal: 32,
    color: "white",
    backgroundColor: COLORS.colors.red,
    textDecorationLine: "none",
    borderWidth: 2,
    borderRadius: 50,
    borderColor: COLORS.button.btnBorder,
  },
});

const forgotPassword = StyleSheet.create({
  forgotPassword: {
    fontSize: 14,
    marginTop: 8,
    color: COLORS.colors.grayDark,
  },
});

export const loginStyles = StyleSheet.create({
  ...imageStyles,
  ...titleTextStyle,
  ...containerStyle,
  ...innerContainerStyle,
  ...registerLinkStyle,
  ...loginLinkStyle,
  ...forgotPassword,
});
