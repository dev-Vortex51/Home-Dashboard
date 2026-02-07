import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const portfolioStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 28,
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  scrollContent: { paddingBottom: 40, paddingTop: 20 },

  // Summary
  summarySection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  balance: {
    color: COLORS.textPrimary,
    fontSize: 36,
    fontFamily: FONTS.bold,
  },
  changeBadge: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 4,
  },
  changeText: {
    color: COLORS.success,
    fontFamily: FONTS.semiBold,
  },

  // Chart
  chartContainer: { marginBottom: 32 },
  rangeSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  rangeTab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  rangeTabActive: { backgroundColor: COLORS.cardBg },
  rangeText: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.semiBold,
  },
  rangeTextActive: { color: COLORS.primary },

  chartWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  pointerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: "white",
  },

  // Allocation
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: COLORS.textPrimary,
    marginBottom: 12,
    fontFamily: FONTS.bold,
  },
  allocationCard: {
    flexDirection: "row",
    backgroundColor: COLORS.cardBg,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
  legendContainer: { flex: 1, gap: 8 },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  legendName: {
    flex: 1,
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
  },
  legendPercent: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
  },
});
