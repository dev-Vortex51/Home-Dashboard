import { StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

export const notificationHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.04)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "700",
  },
  markAll: {
    minWidth: 70,
    alignItems: "flex-end",
  },
  markAllLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
});
