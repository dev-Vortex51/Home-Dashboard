import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const notificationsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 12,
  },
  itemContainer: {
    marginBottom: 0,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 16,
    paddingHorizontal: 4,
    backgroundColor: COLORS.background,
  },
  sectionLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    opacity: 0.7,
    fontFamily: FONTS.bold,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border || "rgba(255,255,255,0.1)",
    marginLeft: 12,
    opacity: 0.5,
  },
  bodyContainer: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});
