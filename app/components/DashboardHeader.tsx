import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../constants/constants";
// import { AppText } from "./AppText";

interface Props {
  firstName: string;
  unreadNotifications: number;
  onPressAvatar: () => void;
  onPressNotifications: () => void;
  onPressSettings: () => void;
}

export const DashboardHeader = ({
  firstName,
  unreadNotifications,
  onPressAvatar,
  onPressNotifications,
  onPressSettings,
}: Props) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity
      style={styles.userInfo}
      onPress={onPressAvatar}
      activeOpacity={0.8}
    >
      <View style={styles.avatar}>
        <Ionicons name="person" size={22} color={COLORS.textPrimary} />
      </View>
      <View>
        <Text style={styles.greeting}>Hi, {firstName}</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.headerActions}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onPressNotifications}
      >
        <Ionicons
          name="notifications-outline"
          size={22}
          color={COLORS.textPrimary}
        />
        {!!unreadNotifications && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {unreadNotifications > 99 ? "99+" : unreadNotifications}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={onPressSettings}>
        <Ionicons
          name="settings-outline"
          size={22}
          color={COLORS.textPrimary}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.muted,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  greeting: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: FONTS.semiBold,
  },
  subGreeting: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  headerActions: {
    flexDirection: "row",
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.muted,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -4,
    backgroundColor: COLORS.error,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 10,
  },
  badgeText: {
    color: COLORS.textPrimary,
    fontSize: 10,
    fontWeight: "700",
  },
});
