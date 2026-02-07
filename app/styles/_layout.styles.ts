import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

export const layoutStyles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    marginHorizontal: 16,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.cardBg,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: COLORS.border || "rgba(255,255,255,0.1)",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  labelStyle: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 4,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
});
