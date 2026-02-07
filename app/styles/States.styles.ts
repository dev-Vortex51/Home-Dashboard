import { StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

const baseCard = {
  backgroundColor: COLORS.cardBg,
  borderRadius: 18,
  padding: 24,
  alignItems: "center" as const,
  gap: 12,
  marginTop: 20,
};

export const statesStyles = StyleSheet.create({
  emptyContainer: {
    marginTop: 20,
    alignItems: "center",
    padding: 24,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
  },
  illustrationContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.muted,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  emptyTitle: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  emptyBody: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: COLORS.textPrimary,
    fontWeight: "700",
    fontSize: 15,
  },
  secondaryButton: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    backgroundColor: COLORS.muted,
  },
  secondaryButtonText: {
    color: COLORS.textPrimary,
    fontWeight: "600",
  },
  errorCard: {
    ...baseCard,
  },
  errorTitle: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "700",
  },
  errorBody: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textAlign: "center",
  },
  loadingCard: {
    ...baseCard,
  },
  loadingText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
});
