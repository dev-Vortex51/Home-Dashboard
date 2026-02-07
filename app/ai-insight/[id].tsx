import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { COLORS, FONTS } from "../constants/constants";
import { COIN_CATALOG } from "../data/coins";

const { width } = Dimensions.get("window");

const PREDICTION_DETAIL = {
  id: "1",
  coin: COIN_CATALOG.btc.name,
  symbol: COIN_CATALOG.btc.symbol,
  currentPrice: COIN_CATALOG.btc.price,
  targetPrice: 43800,
  direction: "UP",
  confidence: 85,
  timeframe: "24h",
  timestamp: "10m ago",
  analysis:
    "Bitcoin has successfully retested the $42,000 support level three times in the last 12 hours. The volume profile suggests exhaustion among sellers, and the 4-hour RSI has just crossed above 40, indicating a potential momentum shift.",
  factors: [
    { label: "RSI (4h)", value: "Bullish Divergence", status: "positive" },
    { label: "Support Level", value: "Strong at $42k", status: "positive" },
    { label: "Funding Rate", value: "Neutral", status: "neutral" },
    { label: "MACD", value: "Approaching Crossover", status: "positive" },
  ],
  accuracy: 78,
};

// Mock data to simulate recent price action leading to current price
const MOCK_CHART_DATA = [
  { value: 41800 },
  { value: 41950 },
  { value: 41900 },
  { value: 42100 },
  { value: 42050 },
  { value: 42200 },
  { value: 42150 },
  { value: 42300 },
  { value: 42400 },
  { value: 42500 }, // Current Price
];

export default function PredictionDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [isAlertSet, setIsAlertSet] = useState(false);

  const data = PREDICTION_DETAIL;
  const isBullish = data.direction === "UP";
  const themeColor = isBullish ? COLORS.success : COLORS.error;

  const handleTrade = () => {
    console.log("Navigating to trade...");
    // router.push({ pathname: "/trade/swap", params: { asset: data.symbol } });
  };

  const handleAskAI = () => {
    // router.push("/ai/chat");
    console.log("Navigating to AI chat...");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={`${data.symbol} Analysis`} />

      <ScrollView contentContainerStyle={styles.content}>
        {/* 1. TOP SUMMARY CARD */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <View>
              <Text style={styles.priceLabel}>Current Price</Text>
              <Text style={styles.priceValue}>
                ${data.currentPrice.toLocaleString()}
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.priceLabel}>Target ({data.timeframe})</Text>
              <Text style={[styles.targetValue, { color: themeColor }]}>
                ${data.targetPrice.toLocaleString()}
              </Text>
            </View>
          </View>

          {/* Progress Bar / Meter */}
          <View style={styles.meterContainer}>
            <View style={styles.meterLabels}>
              <Text style={styles.meterLabel}>Confidence Score</Text>
              <Text style={[styles.meterValue, { color: themeColor }]}>
                {data.confidence}%
              </Text>
            </View>
            <View style={styles.meterBg}>
              <View
                style={[
                  styles.meterFill,
                  { width: `${data.confidence}%`, backgroundColor: themeColor },
                ]}
              />
            </View>
            <Text style={styles.accuracyText}>
              Historical Accuracy on {data.symbol}:{" "}
              <Text style={{ color: COLORS.textPrimary }}>
                {data.accuracy}%
              </Text>
            </Text>
          </View>
        </View>

        {/* 2. CHART SECTION */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.sectionTitle}>Prediction Overlay</Text>
            <View
              style={[styles.badge, { backgroundColor: themeColor + "20" }]}
            >
              <Ionicons
                name={isBullish ? "trending-up" : "trending-down"}
                size={14}
                color={themeColor}
              />
              <Text style={[styles.badgeText, { color: themeColor }]}>
                {isBullish ? "Bullish" : "Bearish"}
              </Text>
            </View>
          </View>

          {/* GIFTED CHART IMPLEMENTATION */}
          <View style={styles.chartWrapper}>
            <LineChart
              data={MOCK_CHART_DATA}
              areaChart
              curved
              height={180}
              width={width - 60}
              color={themeColor}
              startFillColor={themeColor}
              startOpacity={0.2}
              endFillColor={themeColor}
              endOpacity={0.05}
              thickness={3}
              hideDataPoints={true}
              hideRules
              hideYAxisText={false}
              yAxisTextStyle={{ color: COLORS.textSecondary, fontSize: 10 }}
              yAxisColor="transparent"
              xAxisColor="transparent"
              yAxisThickness={0}
              xAxisThickness={0}
              showReferenceLine1
              referenceLine1Position={data.targetPrice}
              referenceLine1Config={{
                color: themeColor,
                dashWidth: 4,
                dashGap: 4,
                thickness: 1,
              }}
              initialSpacing={0}
              adjustToWidth
            />
            {/* Custom Label for Target Price */}
            <View style={[styles.targetLabelContainer, { top: 10 }]}>
              <Text style={[styles.chartLabel, { color: themeColor }]}>
                Target: ${data.targetPrice}
              </Text>
            </View>
          </View>
          <Text style={styles.chartNote}>
            Dashed line indicates AI price target within {data.timeframe}.
          </Text>
        </View>

        {/* 3. ANALYSIS TEXT */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>AI Analysis</Text>
          <Text style={styles.bodyText}>{data.analysis}</Text>
        </View>

        {/* 4. SUPPORTING FACTORS */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Key Factors</Text>
          <View style={styles.factorsGrid}>
            {data.factors.map((factor, index) => (
              <View key={index} style={styles.factorRow}>
                <View style={styles.factorLeft}>
                  <Ionicons
                    name="checkmark-circle"
                    size={16}
                    color={
                      factor.status === "positive"
                        ? COLORS.success
                        : factor.status === "neutral"
                          ? COLORS.textSecondary
                          : COLORS.error
                    }
                  />
                  <Text style={styles.factorLabel}>{factor.label}</Text>
                </View>
                <Text style={styles.factorValue}>{factor.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* 5. FOOTER ACTIONS */}
      <View style={styles.footer}>
        <View style={styles.secondaryActions}>
          <Pressable
            style={styles.iconButton}
            onPress={() => setIsAlertSet(!isAlertSet)}
          >
            <Ionicons
              name={isAlertSet ? "notifications" : "notifications-outline"}
              size={24}
              color={isAlertSet ? COLORS.primary : COLORS.textSecondary}
            />
            <Text style={styles.iconButtonText}>Alert</Text>
          </Pressable>

          <Pressable style={styles.iconButton} onPress={handleAskAI}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color={COLORS.textSecondary}
            />
            <Text style={styles.iconButtonText}>Ask AI</Text>
          </Pressable>
        </View>

        <Pressable style={styles.tradeButton} onPress={handleTrade}>
          <Text style={styles.tradeButtonText}>Trade {data.symbol}</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  summaryCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  priceLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
  },
  priceValue: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontFamily: FONTS.bold,
  },
  targetValue: {
    fontSize: 24,
    fontFamily: FONTS.bold,
  },
  meterContainer: {
    gap: 8,
  },
  meterLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  meterLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  meterValue: {
    fontSize: 12,
    fontWeight: "bold",
  },
  meterBg: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 4,
  },
  meterFill: {
    height: "100%",
    borderRadius: 4,
  },
  accuracyText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    marginTop: 4,
  },
  chartCard: {
    marginBottom: 24,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  // Updated Chart Styles
  chartWrapper: {
    backgroundColor: "rgba(255,255,255,0.02)",
    borderRadius: 16,
    paddingVertical: 10,
    overflow: "hidden",
  },
  targetLabelContainer: {
    position: "absolute",
    right: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  chartLabel: {
    fontSize: 10,
    fontWeight: "bold",
  },
  chartNote: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontFamily: FONTS.bold,
    marginBottom: 12,
  },
  bodyText: {
    color: COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 24,
  },
  factorsGrid: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    gap: 16,
  },
  factorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  factorLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  factorLabel: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  factorValue: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.cardBg,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.05)",
    gap: 16,
  },
  secondaryActions: {
    flexDirection: "row",
    gap: 20,
  },
  iconButton: {
    alignItems: "center",
    gap: 4,
  },
  iconButtonText: {
    color: COLORS.textSecondary,
    fontSize: 10,
  },
  tradeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  tradeButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
