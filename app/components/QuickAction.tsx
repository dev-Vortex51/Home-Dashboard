import { Ionicons } from "@expo/vector-icons";
import type { Href } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, QuickActionConfig } from "../constants/constants";

interface QuickActionProps {
  action: QuickActionConfig;
  onNavigate: (destination: Href) => void;
}

const QuickAction = ({ action, onNavigate }: QuickActionProps) => {
  const iconName = action.icon as keyof typeof Ionicons.glyphMap;

  return (
    <TouchableOpacity
      style={styles.quickAction}
      onPress={() => onNavigate(action.destination)}
      activeOpacity={0.7}
    >
      <View style={styles.quickIconWrapper}>
        <Ionicons name={iconName} size={24} color={COLORS.primary} />
      </View>
      <Text style={styles.quickLabel} numberOfLines={1}>
        {action.label}
      </Text>
    </TouchableOpacity>
  );
};

export default QuickAction;

const styles = StyleSheet.create({
  quickAction: {
    flex: 1,
    alignItems: "center",
  },
  quickIconWrapper: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  quickLabel: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    opacity: 0.9,
    fontFamily: FONTS.light,
  },
});
