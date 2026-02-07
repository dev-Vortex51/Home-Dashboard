import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const quickActionStyles = StyleSheet.create({
  quickAction: {
    flex: 1,
    alignItems: "center",
  },
  quickIconWrapper: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  quickLabel: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    opacity: 0.9,
    fontFamily: FONTS.light,
  },
});
