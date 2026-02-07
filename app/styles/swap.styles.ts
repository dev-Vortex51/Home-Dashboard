import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const swapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  cardContainer: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardLabel: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  balanceText: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  assetSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 24,
    gap: 8,
  },
  iconBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  assetSymbol: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 24,
    fontFamily: FONTS.bold,
    textAlign: "right",
    padding: 0,
  },
  inputReadOnly: {
    color: "rgba(255,255,255,0.5)",
  },
  fiatText: {
    color: COLORS.textSecondary,
    fontSize: 13,
    textAlign: "right",
  },
  swapTriggerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: -12,
    zIndex: 1,
  },
  line: {
    flex: 1,
    height: 0,
  },
  swapButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.background,
    borderWidth: 4,
    borderColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  detailsContainer: {
    marginTop: 24,
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLabel: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  detailValue: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.05)",
  },
  actionButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#3A3A45",
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
