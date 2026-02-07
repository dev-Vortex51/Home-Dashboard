import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

const { width } = Dimensions.get("window");

export const coinIdStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconButton: {
    padding: 8,
  },
  headerTitleContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  coinIconSmall: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
  },
  headerActions: {
    flexDirection: "row",
  },
  priceContainer: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  currentPrice: {
    fontSize: 36,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
  },
  priceChangeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  priceChangeText: {
    fontSize: 16,
    color: COLORS.success,
    fontFamily: FONTS.medium,
    marginLeft: 4,
  },
  timeLabel: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginLeft: 4,
    fontFamily: FONTS.regular,
  },
  chartContainer: {
    height: 240,
    justifyContent: "center",
    marginLeft: -10,
  },
  tooltipContainer: {
    backgroundColor: COLORS.cardBg,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  tooltipPrice: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 14,
    textAlign: "center",
  },
  tooltipDate: {
    color: COLORS.textSecondary,
    fontSize: 10,
    textAlign: "center",
  },
  timeRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  timeRangeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  timeRangeButtonActive: {
    backgroundColor: COLORS.cardBg,
  },
  timeRangeText: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
    fontSize: 13,
  },
  timeRangeTextActive: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtnText: {
    color: "#FFF",
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  holdingsCard: {
    backgroundColor: COLORS.cardBg,
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitleSmall: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontFamily: FONTS.medium,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  holdingsValue: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontFamily: FONTS.bold,
  },
  holdingsFiat: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  addMoreButton: {
    backgroundColor: "rgba(38, 161, 123, 0.1)",
    padding: 10,
    borderRadius: 12,
  },
  aiCard: {
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.3)",
  },
  aiHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  aiBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  aiBadgeText: {
    color: "#FFF",
    fontSize: 10,
    fontFamily: FONTS.bold,
  },
  aiConfidence: {
    color: COLORS.primary,
    fontSize: 12,
    fontFamily: FONTS.medium,
  },
  aiContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  aiPredictionText: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontFamily: FONTS.bold,
  },
  aiPredictionSub: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  aiDetailsLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  aiLinkText: {
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: FONTS.medium,
    marginRight: 4,
  },
  sectionHeader: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontFamily: FONTS.bold,
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  statItem: {
    width: (width - 44) / 2,
    backgroundColor: COLORS.cardBg,
    padding: 12,
    borderRadius: 12,
  },
  statLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
    fontFamily: FONTS.regular,
  },
  statValue: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  aboutText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
    fontFamily: FONTS.regular,
  },
  readMoreText: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
  },
  newsItem: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontFamily: FONTS.medium,
    lineHeight: 22,
    marginBottom: 6,
  },
  newsMeta: {
    flexDirection: "row",
  },
  newsSource: {
    color: COLORS.success,
    fontSize: 12,
    fontFamily: FONTS.bold,
  },
  newsTime: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginLeft: 6,
    fontFamily: FONTS.regular,
  },
});
