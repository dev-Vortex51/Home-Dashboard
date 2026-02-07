import { StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

export const marketMoversStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 4,
    paddingVertical: 10,
    gap: 12,
  },
  card: {
    width: 140,
    height: 150,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    padding: 16,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  iconFallback: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.border,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: COLORS.textPrimary,
    fontWeight: "700",
    fontSize: 16,
  },
  trendBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 2,
  },
  trendText: {
    fontSize: 12,
    fontWeight: "700",
  },
  infoContainer: {
    gap: 4,
  },
  symbol: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  price: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
});
