import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

export const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  screenTitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.cardBg,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  profileInfo: {
    justifyContent: "center",
  },
  profileName: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontFamily: FONTS.bold,
    marginBottom: 4,
  },
  profileHandle: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  premiumBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.warning,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 12,
    gap: 4,
  },
  premiumText: {
    color: "#000",
    fontSize: 10,
    fontFamily: FONTS.bold,
  },
  sectionContainer: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontFamily: FONTS.bold,
    textTransform: "uppercase",
    marginBottom: 12,
    marginLeft: 4,
  },
  sectionContent: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  iconBoxDestructive: {
    backgroundColor: "rgba(239, 68, 68, 0.1)",
  },
  itemLabel: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  itemLabelDestructive: {
    color: COLORS.error,
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  itemValue: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  versionText: {
    textAlign: "center",
    color: COLORS.textSecondary,
    fontSize: 12,
    fontFamily: FONTS.regular,
    marginBottom: 4,
  },
  copyrightText: {
    textAlign: "center",
    color: "rgba(255,255,255,0.3)",
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
});
