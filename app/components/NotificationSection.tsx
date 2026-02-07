import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, NotificationItem } from "../constants/constants";
import { NotificationRow } from "./NotificationRow";

interface Props {
  label: string;
  items: NotificationItem[];
  onPressRow: (item: NotificationItem) => void;
  onDeleteRow: (itemId: string) => void;
}

export const NotificationSection = ({
  label,
  items,
  onPressRow,
  onDeleteRow,
}: Props) => {
  if (!items.length) {
    return null;
  }

  return (
    <View style={styles.section}>
      <View style={styles.headerContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.list}>
        {items.map((item) => (
          <NotificationRow
            onDelete={onDeleteRow}
            key={item.id}
            item={item}
            onPress={onPressRow}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 28, // More breathing room between sections
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    opacity: 0.7,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border || "rgba(255,255,255,0.1)",
    marginLeft: 12,
    opacity: 0.5,
  },
  list: {
    gap: 0, // Gap handled by Row margin
  },
});
