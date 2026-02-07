import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/constants";

export const EmptyNotifications = () => (
  <View style={styles.container}>
    <View style={styles.iconBadge}>
      <Ionicons name="notifications" size={28} color={COLORS.primary} />
    </View>
    <Text style={styles.title}>You&apos;re all caught up</Text>
    <Text style={styles.body}>
      We&apos;ll drop new alerts here as soon as they arrive.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  iconBadge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.cardBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  body: {
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});
