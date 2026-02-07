import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const aiInsightsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  filterContainer: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  filterContent: {
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 12,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  filterChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontFamily: FONTS.medium,
  },
  filterTextActive: {
    color: "white",
    fontWeight: "bold",
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  coinBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  coinSymbol: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  coinName: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  timestamp: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  predictionBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  targetLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
  },
  targetPrice: {
    fontSize: 18,
    fontFamily: FONTS.bold,
  },
  confidenceContainer: {
    alignItems: "flex-end",
  },
  confidenceLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 6,
  },
  meterBg: {
    width: 80,
    height: 6,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 3,
    marginBottom: 4,
  },
  meterFill: {
    height: "100%",
    borderRadius: 3,
  },
  confidenceValue: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: "bold",
  },
  reasonContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.03)",
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  reasonText: {
    flex: 1,
    color: COLORS.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    gap: 8,
  },
  fabText: {
    color: "white",
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
