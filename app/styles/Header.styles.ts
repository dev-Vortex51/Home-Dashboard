import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: COLORS.background,
    zIndex: 1,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    flex: 1,
    textAlign: "center",
  },
  rightContainer: {
    minWidth: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  spacer: {
    width: 40,
  },
});
