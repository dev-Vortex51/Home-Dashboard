import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { COLORS } from "../constants/constants";
import Header from "./Header";

interface Props {
  unreadCount: number;
  onBack: () => void;
  onMarkAll: () => void;
}

export const NotificationHeader = ({ unreadCount, onMarkAll }: Props) => (
  <Header
    headerTitle="Notifications"
    rightComponent={
      <Pressable
        hitSlop={10}
        onPress={onMarkAll}
        disabled={!unreadCount}
        style={styles.markAll}
      >
        <Text
          style={[
            styles.markAllLabel,
            { color: unreadCount ? COLORS.primary : COLORS.textSecondary },
          ]}
        >
          Mark All
        </Text>
      </Pressable>
    }
  />
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.04)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "700",
  },
  markAll: {
    minWidth: 70,
    alignItems: "flex-end",
  },
  markAllLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
});
