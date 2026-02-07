import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const holdingsListStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 24,
    paddingHorizontal: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  rowNoBorder: {
    borderBottomWidth: 0,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  coinImage: {
    width: 30,
    height: 30,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  coinFallback: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.border,
    justifyContent: "center",
    alignItems: "center",
  },
  coinFallbackText: {
    color: COLORS.textPrimary,
    fontWeight: "700",
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  nameColumn: {
    gap: 2,
  },
  name: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    fontFamily: FONTS.light,
  },
  symbol: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: FONTS.medium,
  },
  rightSection: {
    alignItems: "flex-end",
    gap: 4,
  },
  value: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "600",
    fontVariant: ["tabular-nums"],
    fontFamily: FONTS.light,
  },
  changeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  changeText: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: FONTS.light,
  },
});
