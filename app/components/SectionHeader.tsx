import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

interface Props {
  title: string;
  actionLabel?: string;
  onPress?: () => void;
}

export const SectionHeader = ({
  title,
  actionLabel = "See All",
  onPress,
}: Props) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>

    {onPress && (
      <TouchableOpacity
        onPress={onPress}
        style={styles.actionButton}
        activeOpacity={0.7}
      >
        <Text style={styles.seeAll}>{actionLabel}</Text>
        <Ionicons name="chevron-forward" size={18} color={COLORS.primary} />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 32,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: -0.5,
    fontFamily: FONTS.bold,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingLeft: 8,
  },
  seeAll: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "600",
    marginRight: 2,
  },
});
