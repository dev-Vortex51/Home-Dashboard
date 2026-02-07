import { StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

export const notificationSectionStyles = StyleSheet.create({
  section: {
    marginBottom: 28,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    opacity: 0.7,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border || "rgba(255,255,255,0.1)",
    marginLeft: 12,
    opacity: 0.5,
  },
  list: {
    gap: 0,
  },
});
