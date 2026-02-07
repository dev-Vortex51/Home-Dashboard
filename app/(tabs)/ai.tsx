import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, FONTS } from "../constants/constants";

const PREDICTIONS = [
  {
    id: "p1",
    coinId: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    type: "Bullish",
    confidence: 87,
    target: 52000,
    timeframe: "7 days",
    currentPrice: 47234.56,
    projectedChange: 12.5,
  },
  {
    id: "p2",
    coinId: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    type: "Bullish",
    confidence: 72,
    target: 2800,
    timeframe: "14 days",
    currentPrice: 2456.12,
    projectedChange: 8.2,
  },
  {
    id: "p3",
    coinId: "solana",
    symbol: "SOL",
    name: "Solana",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
    type: "Bearish",
    confidence: 65,
    target: 85.5,
    timeframe: "3 days",
    currentPrice: 98.45,
    projectedChange: -13.1,
  },
  {
    id: "p4",
    coinId: "cardano",
    symbol: "ADA",
    name: "Cardano",
    icon: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    type: "Bullish",
    confidence: 60,
    target: 0.65,
    timeframe: "10 days",
    currentPrice: 0.56,
    projectedChange: 16.0,
  },
];

const SENTIMENT = {
  value: 65,
  label: "Greed",
  social: "Bullish",
  trend: "Rising",
};

const TABS = ["All", "Bullish", "Bearish", "Your Coins"];

export default function AIHubScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");

  const filteredPredictions = useMemo(() => {
    switch (activeTab) {
      case "Bullish":
        return PREDICTIONS.filter((p) => p.type === "Bullish");
      case "Bearish":
        return PREDICTIONS.filter((p) => p.type === "Bearish");
      case "Your Coins":
        return PREDICTIONS.filter((p) => ["BTC", "ETH"].includes(p.symbol));
      case "All":
      default:
        return PREDICTIONS;
    }
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.screenTitle}>AI Insights</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Ionicons
              name="settings-outline"
              size={24}
              color={COLORS.textPrimary}
            />
          </TouchableOpacity>
        </View>

        {/* Chat with AI CTA */}
        <TouchableOpacity style={styles.chatCard} onPress={() => {}}>
          <LinearGradient
            colors={[COLORS.primary, "#6366f1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.chatGradient}
          >
            <View style={styles.chatContent}>
              <View style={styles.chatTextContainer}>
                <Text style={styles.chatTitle}>Chat with FinAI</Text>
                <Text style={styles.chatSubtitle}>
                  Ask about market trends, coin analysis, or portfolio advice.
                </Text>
              </View>
              <View style={styles.chatIconContainer}>
                <Ionicons name="chatbubbles" size={32} color="#FFF" />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Market Sentiment Card */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Market Sentiment</Text>
          <TouchableOpacity style={styles.sentimentCard} onPress={() => {}}>
            <View style={styles.sentimentRow}>
              <View style={styles.sentimentItem}>
                <Text style={styles.sentimentLabel}>Fear & Greed</Text>
                <Text
                  style={[styles.sentimentValue, { color: COLORS.success }]}
                >
                  {SENTIMENT.value}{" "}
                  <Text style={styles.sentimentSub}>({SENTIMENT.label})</Text>
                </Text>
              </View>
              <View style={styles.dividerVertical} />
              <View style={styles.sentimentItem}>
                <Text style={styles.sentimentLabel}>Social Volume</Text>
                <Text
                  style={[styles.sentimentValue, { color: COLORS.primary }]}
                >
                  {SENTIMENT.social}{" "}
                  <Text style={styles.sentimentSub}>({SENTIMENT.trend})</Text>
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={COLORS.textSecondary}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Predictions Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Top Predictions</Text>

          {/* Tabs */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabsScroll}
          >
            {TABS.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabItem,
                  activeTab === tab && styles.tabItemActive,
                ]}
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
          </ScrollView>

          {/* Prediction Cards */}
          <View style={styles.cardsContainer}>
            {filteredPredictions.map((item) => {
              const isBullish = item.type === "Bullish";
              const color = isBullish ? COLORS.success : COLORS.error;

              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.predictionCard}
                  onPress={() =>
                    router.push({
                      pathname: "/ai-insight/[id]",
                      params: { id: item.id },
                    })
                  }
                >
                  <View style={styles.cardHeader}>
                    <View style={styles.coinInfo}>
                      <Image
                        source={{ uri: item.icon }}
                        style={styles.coinIcon}
                      />
                      <Text style={styles.coinSymbol}>{item.symbol}</Text>
                      <View
                        style={[
                          styles.typeBadge,
                          {
                            backgroundColor: isBullish
                              ? "rgba(16, 185, 129, 0.1)"
                              : "rgba(239, 68, 68, 0.1)",
                          },
                        ]}
                      >
                        <Ionicons
                          name={isBullish ? "trending-up" : "trending-down"}
                          size={14}
                          color={color}
                        />
                        <Text style={[styles.typeText, { color: color }]}>
                          {item.type}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.confidenceBadge}>
                      <Ionicons
                        name="flash"
                        size={12}
                        color="#FFF"
                        style={{ marginRight: 4 }}
                      />
                      <Text style={styles.confidenceText}>
                        {item.confidence}% Conf.
                      </Text>
                    </View>
                  </View>

                  <View style={styles.cardBody}>
                    <View style={styles.targetRow}>
                      <Text style={styles.targetLabel}>
                        Target ({item.timeframe})
                      </Text>
                      <Text style={styles.targetValue}>
                        ${item.target.toLocaleString()}
                      </Text>
                    </View>
                    <View style={styles.changeRow}>
                      <Text style={styles.changeLabel}>Projected</Text>
                      <Text style={[styles.changeValue, { color: color }]}>
                        {isBullish ? "+" : ""}
                        {item.projectedChange}%
                      </Text>
                    </View>
                  </View>

                  <View style={styles.cardFooter}>
                    <Text style={styles.aiReason}>
                      AI detects a strong support bounce pattern.
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 20,
    paddingBottom: 60,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
  },
  settingsButton: {
    padding: 8,
  },
  chatCard: {
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 16,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  chatGradient: {
    borderRadius: 16,
    padding: 20,
  },
  chatContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  chatTitle: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: "#FFF",
    marginBottom: 6,
  },
  chatSubtitle: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: "rgba(255,255,255,0.9)",
    lineHeight: 18,
  },
  chatIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sentimentCard: {
    marginHorizontal: 16,
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  sentimentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sentimentItem: {
    flex: 1,
  },
  sentimentLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
    marginBottom: 4,
  },
  sentimentValue: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  sentimentSub: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
  },
  dividerVertical: {
    width: 1,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginHorizontal: 16,
  },
  tabsScroll: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    marginRight: 8,
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
  cardsContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  predictionCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  coinSymbol: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginRight: 8,
  },
  typeBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    gap: 4,
  },
  typeText: {
    fontSize: 12,
    fontFamily: FONTS.bold,
  },
  confidenceBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  confidenceText: {
    color: "#FFF",
    fontSize: 11,
    fontFamily: FONTS.bold,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  targetRow: {
    alignItems: "flex-start",
  },
  targetLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
    fontFamily: FONTS.regular,
  },
  targetValue: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  changeRow: {
    alignItems: "flex-end",
  },
  changeLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
    fontFamily: FONTS.regular,
  },
  changeValue: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  cardFooter: {
    flexDirection: "row",
  },
  aiReason: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontFamily: FONTS.regular,
    fontStyle: "italic",
  },
});
