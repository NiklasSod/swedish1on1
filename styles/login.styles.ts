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

export const loginStyles = StyleSheet.create({
  ...imageStyles,
  ...titleTextStyle,
  ...containerStyle,
  ...innerContainerStyle,
});
