import { StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 10,
  },
  contentStack: {
    gap: 24,
  },
  emptyStateSection: {
    marginTop: 20,
    gap: 16,
  },
});
