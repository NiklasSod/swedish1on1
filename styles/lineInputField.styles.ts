import { StyleSheet } from "react-native";
import { COLORS } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.colors.grayDark,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingVertical: 8,
  },
  iconContainer: {
    padding: 8,
  },
});
