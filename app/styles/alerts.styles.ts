import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const alertsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingBottom: 60,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    marginBottom: 16,
  },
  screenTitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.cardBg,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
    marginTop: 10,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
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
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontFamily: FONTS.bold,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  warningHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  warningTitle: {
    color: COLORS.error,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  securityCard: {
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(239, 68, 68, 0.3)",
  },
  securityContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  securityIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(239, 68, 68, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  securityText: {
    justifyContent: "center",
  },
  securityName: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 14,
    marginBottom: 2,
  },
  securityIssue: {
    color: COLORS.error,
    fontFamily: FONTS.medium,
    fontSize: 12,
  },
  alertRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    marginBottom: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  alertMainClickable: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  alertInfo: {
    flex: 1,
  },
  alertCondition: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginBottom: 4,
  },
  alertMetaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  alertSymbol: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
    fontSize: 13,
  },
  dotSeparator: {
    color: COLORS.textSecondary,
    marginHorizontal: 6,
    fontSize: 10,
  },
  alertType: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.regular,
    fontSize: 13,
  },
  rowActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  actionIcon: {
    padding: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  emptyState: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
  },
  triggeredCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.success,
  },
  triggeredHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  coinIconSmall: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  triggeredSymbol: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 14,
    flex: 1,
  },
  triggeredTime: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
  triggeredMessage: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontFamily: FONTS.medium,
    marginBottom: 8,
  },
  triggeredFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  triggeredStatus: {
    color: COLORS.success,
    fontSize: 12,
    fontFamily: FONTS.bold,
  },
});
