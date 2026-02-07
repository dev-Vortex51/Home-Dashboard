import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { COLORS } from "./constants/constants";
import { settingsStyles as styles } from "./styles/settings.styles";

const USER = {
  name: "David Caulcrick",
  handle: "@davidc",
  avatar: "https://i.pravatar.cc/150?u=david",
  isPremium: true,
};

export default function SettingsScreen() {
  const router = useRouter();

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: () => {},
      },
    ]);
  };

  const SettingsSection = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeader}>{title}</Text>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );

  const SettingsItem = ({
    icon,
    label,
    value,
    onPress,
    isDestructive = false,
    hasToggle = false,
    toggleValue = false,
    onToggle = () => {},
  }: any) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={hasToggle ? () => onToggle(!toggleValue) : onPress}
      disabled={hasToggle}
    >
      <View style={styles.itemLeft}>
        <View
          style={[styles.iconBox, isDestructive && styles.iconBoxDestructive]}
        >
          <Ionicons
            name={icon}
            size={20}
            color={isDestructive ? COLORS.error : COLORS.primary}
          />
        </View>
        <Text
          style={[
            styles.itemLabel,
            isDestructive && styles.itemLabelDestructive,
          ]}
        >
          {label}
        </Text>
      </View>

      <View style={styles.itemRight}>
        {hasToggle ? (
          <Switch
            trackColor={{ false: "#767577", true: COLORS.primary }}
            thumbColor={"#f4f3f4"}
            onValueChange={onToggle}
            value={toggleValue}
          />
        ) : (
          <>
            {value && <Text style={styles.itemValue}>{value}</Text>}
            <Ionicons
              name="chevron-forward"
              size={16}
              color={COLORS.textSecondary}
            />
          </>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      {/* Header */}
      <Header headerTitle="Settings" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <TouchableOpacity style={styles.profileCard} onPress={() => {}}>
          <Image source={{ uri: USER.avatar }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{USER.name}</Text>
            <Text style={styles.profileHandle}>{USER.handle}</Text>
          </View>
          {USER.isPremium && (
            <View style={styles.premiumBadge}>
              <Ionicons name="star" size={12} color="#FFF" />
              <Text style={styles.premiumText}>PRO</Text>
            </View>
          )}
          <Ionicons
            name="chevron-forward"
            size={20}
            color={COLORS.textSecondary}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        {/* Account Settings */}
        <SettingsSection title="Account">
          <SettingsItem
            icon="person-outline"
            label="Edit Profile"
            onPress={() => {}}
          />
          <SettingsItem
            icon="shield-checkmark-outline"
            label="Security"
            onPress={() => {}}
          />
          <SettingsItem
            icon="card-outline"
            label="Subscription"
            value="Active"
            onPress={() => {}}
          />
          <SettingsItem
            icon="wallet-outline"
            label="Connected Wallets"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Preferences */}
        <SettingsSection title="Preferences">
          <SettingsItem
            icon="notifications-outline"
            label="Notifications"
            onPress={() => {}}
          />
          <SettingsItem
            icon="moon-outline"
            label="Dark Mode"
            hasToggle={true}
            toggleValue={isDarkMode}
            onToggle={setIsDarkMode}
          />
          <SettingsItem
            icon="cash-outline"
            label="Currency"
            value="USD"
            onPress={() => {}}
          />
          <SettingsItem
            icon="globe-outline"
            label="Language"
            value="English"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Learn & Community */}
        <SettingsSection title="Learn & Community">
          <SettingsItem
            icon="school-outline"
            label="Learn Hub"
            onPress={() => {}}
          />
          <SettingsItem
            icon="trophy-outline"
            label="Achievements"
            onPress={() => {}}
          />
          <SettingsItem
            icon="game-controller-outline"
            label="Paper Trading"
            onPress={() => {}}
          />
          <SettingsItem
            icon="people-outline"
            label="Social Feed"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Support */}
        <SettingsSection title="Support">
          <SettingsItem
            icon="help-circle-outline"
            label="Help Center"
            onPress={() => {}}
          />
          <SettingsItem
            icon="mail-outline"
            label="Contact Support"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Legal */}
        <SettingsSection title="Legal">
          <SettingsItem
            icon="document-text-outline"
            label="Terms of Service"
            onPress={() => {}}
          />
          <SettingsItem
            icon="lock-closed-outline"
            label="Privacy Policy"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Sign Out */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionContent}>
            <SettingsItem
              icon="log-out-outline"
              label="Sign Out"
              isDestructive={true}
              onPress={handleSignOut}
            />
          </View>
        </View>

        {/* Version Info */}
        <Text style={styles.versionText}>Version 1.0.0 (Build 123)</Text>
        <Text style={styles.copyrightText}>
          © {new Date().getFullYear()} CryptoApp Inc.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
