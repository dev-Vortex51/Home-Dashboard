import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const aiInsightIdStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  summaryCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  priceLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
  },
  priceValue: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontFamily: FONTS.bold,
  },
  targetValue: {
    fontSize: 24,
    fontFamily: FONTS.bold,
  },
  meterContainer: {
    gap: 8,
  },
  meterLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  meterLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  meterValue: {
    fontSize: 12,
    fontWeight: "bold",
  },
  meterBg: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 4,
  },
  meterFill: {
    height: "100%",
    borderRadius: 4,
  },
  accuracyText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    marginTop: 4,
  },
  chartCard: {
    marginBottom: 24,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  chartWrapper: {
    backgroundColor: "rgba(255,255,255,0.02)",
    borderRadius: 16,
    paddingVertical: 10,
    overflow: "hidden",
  },
  targetLabelContainer: {
    position: "absolute",
    right: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  chartLabel: {
    fontSize: 10,
    fontWeight: "bold",
  },
  chartNote: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontFamily: FONTS.bold,
    marginBottom: 12,
  },
  bodyText: {
    color: COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 24,
  },
  factorsGrid: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    gap: 16,
  },
  factorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  factorLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  factorLabel: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  factorValue: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.cardBg,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.05)",
    gap: 16,
  },
  secondaryActions: {
    flexDirection: "row",
    gap: 20,
  },
  iconButton: {
    alignItems: "center",
    gap: 4,
  },
  iconButtonText: {
    color: COLORS.textSecondary,
    fontSize: 10,
  },
  tradeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  tradeButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
