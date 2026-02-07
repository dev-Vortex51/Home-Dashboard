import type { Href } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import type { QuickActionConfig } from "../constants/constants";
import QuickAction from "./QuickAction";

interface RowProps {
  actions: QuickActionConfig[];
  onNavigate: (destination: Href) => void;
}

export const QuickActionsRow = ({ actions, onNavigate }: RowProps) => (
  <View style={styles.quickActionsRow}>
    {actions.map((action) => (
      <QuickAction key={action.label} action={action} onNavigate={onNavigate} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  quickActionsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    paddingVertical: 10,
  },
});
