import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const sectionHeaderStyles = StyleSheet.create({
  sectionHeader: {
    marginTop: 32,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: -0.5,
    fontFamily: FONTS.bold,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingLeft: 8,
  },
  seeAll: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "600",
    marginRight: 2,
  },
});
