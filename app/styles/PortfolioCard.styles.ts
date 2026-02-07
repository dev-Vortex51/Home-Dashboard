import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const portfolioCardStyles = StyleSheet.create({
  portfolioCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
    overflow: "hidden",
    minHeight: 220,
    justifyContent: "space-between",
  },
  contentContainer: {
    padding: 24,
    paddingBottom: 0,
    zIndex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardLabel: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontFamily: FONTS.regular,
  },
  portfolioValue: {
    color: COLORS.textPrimary,
    fontSize: 40,
    letterSpacing: -0.5,
    marginBottom: 12,
    fontFamily: FONTS.bold,
  },
  changeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  changeValue: {
    fontSize: 16,
    marginRight: 6,
    fontFamily: FONTS.medium,
  },
  changePercent: {
    fontSize: 16,
    opacity: 0.8,
    fontFamily: FONTS.medium,
  },
  chartContainer: {
    height: 100,
    marginTop: 10,
    marginHorizontal: -20,
    marginBottom: -10,
    opacity: 1,
    alignItems: "center",
  },
});
