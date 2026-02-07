import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { COLORS, FONTS } from "../constants/constants";

interface HeaderProps {
  headerTitle: string;
  onBack?: () => void;
  rightComponent?: React.ReactNode;
  style?: ViewStyle;
}

const Header = ({
  headerTitle,
  onBack,
  rightComponent,
  style,
}: HeaderProps) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <View style={[styles.header, style]}>
      <Pressable onPress={handleBack} style={styles.iconButton} hitSlop={20}>
        <Ionicons name="arrow-back" size={24} color={COLORS.textPrimary} />
      </Pressable>

      <Text style={styles.headerTitle}>{headerTitle}</Text>

      {rightComponent ? (
        <View style={styles.rightContainer}>{rightComponent}</View>
      ) : (
        <View style={styles.spacer} />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: COLORS.background,
    zIndex: 1,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    flex: 1,
    textAlign: "center",
  },
  rightContainer: {
    minWidth: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  spacer: {
    width: 40,
  },
});
