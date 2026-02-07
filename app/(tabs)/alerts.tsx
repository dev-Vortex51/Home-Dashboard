import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { COLORS, FONTS } from "../constants/constants";

// --- Mock Data ---
const ACTIVE_ALERTS = [
  {
    id: "a1",
    coinId: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    condition: "Price > $50,000",
    type: "Price Alert",
    isActive: true,
  },
  {
    id: "a2",
    coinId: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    condition: "Down 5% in 1h",
    type: "Volatility Alert",
    isActive: true,
  },
  {
    id: "a3",
    coinId: "solana",
    symbol: "SOL",
    name: "Solana",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
    condition: "Price < $80.00",
    type: "Price Alert",
    isActive: false,
  },
];

const TRIGGERED_ALERTS = [
  {
    id: "t1",
    symbol: "SOL",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
    message: "SOL crossed $100.00",
    time: "2 hours ago",
  },
  {
    id: "t2",
    symbol: "BTC",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    message: "BTC up 5% in 1 hour",
    time: "5 hours ago",
  },
];

const SECURITY_ALERTS = [
  {
    id: "s1",
    symbol: "SCAM",
    name: "SafeMoon 2.0",
    riskLevel: "High",
    issue: "Liquidity Removed",
    time: "10 mins ago",
  },
];

const TABS = ["Active", "Triggered", "All"];

export default function AlertsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Active");
  const [alerts, setAlerts] = useState(ACTIVE_ALERTS);

  // --- Logic ---
  const handleDelete = (id: string) => {
    Alert.alert("Delete Alert", "Are you sure you want to delete this alert?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setAlerts((prev) => prev.filter((a) => a.id !== id)),
      },
    ]);
  };

  const filteredView = useMemo(() => {
    return activeTab;
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={styles.screenTitle}>Alerts</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
          <Ionicons name="add" size={24} color="#FFF" />
        </TouchableOpacity>
      </View> */}

      <Header
        headerTitle="Alerts"
        rightComponent={
          <TouchableOpacity style={styles.addButton} onPress={() => {}}>
            <Ionicons name="add" size={24} color="#FFF" />
          </TouchableOpacity>
        }
      />

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {(activeTab === "All" || activeTab === "Active") &&
          SECURITY_ALERTS.length > 0 && (
            <View style={styles.sectionContainer}>
              <View style={styles.warningHeader}>
                <Ionicons name="warning" size={20} color={COLORS.error} />
                <Text style={styles.warningTitle}>Security Risks Detected</Text>
              </View>
              {SECURITY_ALERTS.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.securityCard}
                  onPress={() => {}}
                >
                  <View style={styles.securityContent}>
                    <View style={styles.securityIconBg}>
                      <Ionicons
                        name="skull-outline"
                        size={24}
                        color={COLORS.error}
                      />
                    </View>
                    <View style={styles.securityText}>
                      <Text style={styles.securityName}>
                        {item.name} ({item.symbol})
                      </Text>
                      <Text style={styles.securityIssue}>{item.issue}</Text>
                    </View>
                  </View>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={COLORS.error}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}

        {/* Active Alerts List */}
        {(activeTab === "All" || activeTab === "Active") && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>
              Active Alerts ({alerts.length})
            </Text>
            {alerts.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No active alerts.</Text>
              </View>
            ) : (
              alerts.map((item) => (
                <View key={item.id} style={styles.alertRow}>
                  <TouchableOpacity
                    style={styles.alertMainClickable}
                    onPress={() => {}}
                  >
                    <Image
                      source={{ uri: item.icon }}
                      style={styles.coinIcon}
                    />
                    <View style={styles.alertInfo}>
                      <Text style={styles.alertCondition}>
                        {item.condition}
                      </Text>
                      <View style={styles.alertMetaRow}>
                        <Text style={styles.alertSymbol}>{item.symbol}</Text>
                        <Text style={styles.dotSeparator}>•</Text>
                        <Text style={styles.alertType}>{item.type}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  {/* Row Actions */}
                  <View style={styles.rowActions}>
                    <TouchableOpacity
                      onPress={() => handleDelete(item.id)}
                      style={styles.actionIcon}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={20}
                        color={COLORS.textSecondary}
                      />
                    </TouchableOpacity>
                    <View
                      style={[
                        styles.statusDot,
                        {
                          backgroundColor: item.isActive
                            ? COLORS.success
                            : COLORS.textSecondary,
                        },
                      ]}
                    />
                  </View>
                </View>
              ))
            )}
          </View>
        )}

        {/* Recently Triggered */}
        {(activeTab === "All" || activeTab === "Triggered") && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Recently Triggered</Text>
            {TRIGGERED_ALERTS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.triggeredCard}
                onPress={() => {}}
              >
                <View style={styles.triggeredHeader}>
                  <Image
                    source={{ uri: item.icon }}
                    style={styles.coinIconSmall}
                  />
                  <Text style={styles.triggeredSymbol}>{item.symbol}</Text>
                  <Text style={styles.triggeredTime}>{item.time}</Text>
                </View>
                <Text style={styles.triggeredMessage}>{item.message}</Text>
                <View style={styles.triggeredFooter}>
                  <Ionicons
                    name="checkmark-circle"
                    size={16}
                    color={COLORS.success}
                  />
                  <Text style={styles.triggeredStatus}>Triggered</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingBottom: 60,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    marginBottom: 16,
  },
  screenTitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.cardBg,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
    marginTop: 10,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  tabItemActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  tabTextActive: {
    color: "#FFF",
    fontFamily: FONTS.bold,
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontFamily: FONTS.bold,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  warningHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  warningTitle: {
    color: COLORS.error,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  securityCard: {
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(239, 68, 68, 0.3)",
  },
  securityContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  securityIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(239, 68, 68, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  securityText: {
    justifyContent: "center",
  },
  securityName: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 14,
    marginBottom: 2,
  },
  securityIssue: {
    color: COLORS.error,
    fontFamily: FONTS.medium,
    fontSize: 12,
  },

  alertRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    marginBottom: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  alertMainClickable: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  alertInfo: {
    flex: 1,
  },
  alertCondition: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginBottom: 4,
  },
  alertMetaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  alertSymbol: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
    fontSize: 13,
  },
  dotSeparator: {
    color: COLORS.textSecondary,
    marginHorizontal: 6,
    fontSize: 10,
  },
  alertType: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.regular,
    fontSize: 13,
  },
  rowActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  actionIcon: {
    padding: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  emptyState: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
  },

  triggeredCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.success,
  },
  triggeredHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  coinIconSmall: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  triggeredSymbol: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 14,
    flex: 1,
  },
  triggeredTime: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
  triggeredMessage: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontFamily: FONTS.medium,
    marginBottom: 8,
  },
  triggeredFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  triggeredStatus: {
    color: COLORS.success,
    fontSize: 12,
    fontFamily: FONTS.bold,
  },
});
