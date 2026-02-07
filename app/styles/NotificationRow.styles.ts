import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

export const notificationRowStyles = StyleSheet.create({
  rowWrapper: {
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  swipeContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    padding: 18,
    backgroundColor: COLORS.cardBg,
    alignItems: "flex-start",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.03)",
  },
  unreadRowBackground: {
    backgroundColor: "#252530",
  },
  rowPressed: {
    backgroundColor: "#2A2A35",
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
    marginRight: 8,
    opacity: 0.9,
  },
  unreadTitle: {
    fontWeight: "700",
    opacity: 1,
  },
  timestamp: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: "500",
    opacity: 0.7,
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.8,
  },
  unreadDesc: {
    color: COLORS.textPrimary,
    opacity: 0.9,
  },
  unreadDot: {
    position: "absolute",
    top: 8,
    right: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  deleteButtonContainer: {
    width: 90,
    height: "100%",
    alignSelf: "stretch",
    paddingLeft: 10,
  },
  deleteContent: {
    backgroundColor: COLORS.error || "#FF4757",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  trashCircle: {
    opacity: 0.9,
  },
  deleteText: {
    color: "white",
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});
