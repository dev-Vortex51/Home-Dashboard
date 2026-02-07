import { StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

export const emptyNotificationsStyles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  iconBadge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.cardBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  body: {
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});
