import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const dashboardHeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.muted,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  greeting: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: FONTS.semiBold,
  },
  subGreeting: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  headerActions: {
    flexDirection: "row",
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.muted,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -4,
    backgroundColor: COLORS.error,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 10,
  },
  badgeText: {
    color: COLORS.textPrimary,
    fontSize: 10,
    fontWeight: "700",
  },
});
