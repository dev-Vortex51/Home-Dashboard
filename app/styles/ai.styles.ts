import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const aiStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 20,
    paddingBottom: 60,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
  },
  settingsButton: {
    padding: 8,
  },
  chatCard: {
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 16,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  chatGradient: {
    borderRadius: 16,
    padding: 20,
  },
  chatContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  chatTitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: "#FFF",
    marginBottom: 6,
  },
  chatSubtitle: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: "rgba(255,255,255,0.9)",
    lineHeight: 18,
  },
  chatIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sentimentCard: {
    marginHorizontal: 16,
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  sentimentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sentimentItem: {
    flex: 1,
  },
  sentimentLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
    marginBottom: 4,
  },
  sentimentValue: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  sentimentSub: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
  },
  dividerVertical: {
    width: 1,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginHorizontal: 16,
  },
  tabsScroll: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    marginRight: 8,
  },
  tabItemActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  tabTextActive: {
    color: "#FFF",
    fontFamily: FONTS.bold,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  predictionCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  coinSymbol: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginRight: 8,
  },
  typeBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    gap: 4,
  },
  typeText: {
    fontSize: 12,
    fontFamily: FONTS.bold,
  },
  confidenceBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  confidenceText: {
    color: "#FFF",
    fontSize: 11,
    fontFamily: FONTS.bold,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  targetRow: {
    alignItems: "flex-start",
  },
  targetLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
    fontFamily: FONTS.regular,
  },
  targetValue: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  changeRow: {
    alignItems: "flex-end",
  },
  changeLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
    fontFamily: FONTS.regular,
  },
  changeValue: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  cardFooter: {
    flexDirection: "row",
  },
  aiReason: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontFamily: FONTS.regular,
    fontStyle: "italic",
  },
});
