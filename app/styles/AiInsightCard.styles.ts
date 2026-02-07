import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const aiInsightCardStyles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 24,
    padding: 1.5,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  cardContent: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 22,
    padding: 18,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "rgba(139, 92, 246, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  titleWrapper: {
    flex: 1,
  },
  symbol: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
    fontFamily: FONTS.medium,
  },
  aiLabel: {
    color: "#8B5CF6",
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    fontFamily: FONTS.medium,
  },
  timeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    fontFamily: FONTS.light,
  },
  timeframe: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: "500",
    fontFamily: FONTS.light,
  },
  prediction: {
    color: COLORS.textPrimary,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "400",
    marginBottom: 16,
    opacity: 0.9,
    fontFamily: FONTS.light,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.05)",
  },
  confidenceLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: FONTS.light,
  },
  meterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  track: {
    width: 80,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.1)",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 3,
  },
  percentText: {
    fontSize: 13,
    fontWeight: "700",
    fontFamily: FONTS.medium,
  },
});
