import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants/constants";
import { CryptoApi } from "../services/api";
import { decimateData } from "../utils/utils";

const { width } = Dimensions.get("window");

const TIME_RANGES = [
  { label: "1D", days: "1" },
  { label: "1W", days: "7" },
  { label: "1M", days: "30" },
  { label: "3M", days: "90" },
  { label: "1Y", days: "365" },
];

export default function CoinDetailScreen() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const coinId = typeof id === "string" ? id : id?.[0];

  // --- State ---
  const [loading, setLoading] = useState(true);
  const [chartLoading, setChartLoading] = useState(true);

  // Coin Data State
  const [coinData, setCoinData] = useState<any>(null);
  const [rawChartData, setRawChartData] = useState<any[]>([]);

  // UI State
  const [selectedRange, setSelectedRange] = useState("1D");
  const [isFavorite, setIsFavorite] = useState(false);
  const [hasAlert, setHasAlert] = useState(false);

  // --- Data Fetching ---

  useEffect(() => {
    const fetchDetails = async () => {
      if (!coinId) return;
      try {
        const data = await CryptoApi.getCoinDetails(coinId);
        setCoinData(data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [coinId]);

  useEffect(() => {
    const fetchChart = async () => {
      if (!coinId) return;
      try {
        setChartLoading(true);
        const days =
          TIME_RANGES.find((r) => r.label === selectedRange)?.days || "1";

        const data = await CryptoApi.getCoinMarketChart(coinId, days);

        if (data?.prices) {
          const formattedData = data.prices.map(([timestamp, price]) => ({
            value: price,
            date: new Date(timestamp),
          }));
          setRawChartData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching chart:", error);
      } finally {
        setChartLoading(false);
      }
    };

    fetchChart();
  }, [coinId, selectedRange]);

  // Memoized decimated chart data
  const chartData = useMemo(() => {
    return decimateData(rawChartData, 100);
  }, [rawChartData]);

  // --- Helpers ---

  const getChartColor = () => {
    if (!coinData?.market_data) return COLORS.primary;
    return coinData.market_data.price_change_percentage_24h >= 0
      ? COLORS.success
      : COLORS.error;
  };

  const formatCurrency = (value: number) => {
    return (
      value?.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 6,
      }) || "0.00"
    );
  };

  const cleanDescription = (desc: string) => {
    return desc ? desc.replace(/<[^>]*>?/gm, "") : "No description available.";
  };

  // --- Render Loading ---
  if (loading || !coinData) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </SafeAreaView>
    );
  }

  const currentPrice = coinData.market_data.current_price.usd;
  const priceChange = coinData.market_data.price_change_percentage_24h;
  const isPositive = priceChange >= 0;
  const chartColor = getChartColor();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Image
            source={{ uri: coinData.image.small }}
            style={styles.coinIconSmall}
          />
          <View>
            <Text style={styles.headerTitle}>{coinData.name}</Text>
            <Text style={styles.headerSubtitle}>
              {coinData.symbol.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
            style={styles.iconButton}
          >
            <Ionicons
              name={isFavorite ? "star" : "star-outline"}
              size={24}
              color={isFavorite ? COLORS.warning : COLORS.textPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setHasAlert(!hasAlert)}
            style={styles.iconButton}
          >
            <Ionicons
              name={hasAlert ? "notifications" : "notifications-outline"}
              size={24}
              color={hasAlert ? COLORS.primary : COLORS.textPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Price Section */}
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>
            ${formatCurrency(currentPrice)}
          </Text>
          <View style={styles.priceChangeRow}>
            <Ionicons
              name={isPositive ? "caret-up" : "caret-down"}
              size={20}
              color={isPositive ? COLORS.success : COLORS.error}
            />
            <Text
              style={[
                styles.priceChangeText,
                { color: isPositive ? COLORS.success : COLORS.error },
              ]}
            >
              {Math.abs(priceChange).toFixed(2)}%
            </Text>
            <Text style={styles.timeLabel}>24h</Text>
          </View>
        </View>

        {/* Chart Section */}
        <View style={styles.chartContainer}>
          {chartLoading ? (
            <View
              style={{
                height: 220,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator color={COLORS.textSecondary} />
            </View>
          ) : (
            <LineChart
              areaChart
              data={chartData}
              height={220}
              width={width}
              spacing={width / (chartData.length + 10)}
              initialSpacing={0}
              color={chartColor}
              thickness={2}
              startFillColor={chartColor}
              endFillColor={chartColor}
              startOpacity={0.2}
              endOpacity={0.0}
              hideDataPoints
              hideAxesAndRules
              hideYAxisText
              isAnimated
              // Simple pointer config
              pointerConfig={{
                pointerStripHeight: 160,
                pointerStripColor: "rgba(255, 255, 255, 0.2)",
                pointerStripWidth: 2,
                pointerColor: "rgba(255, 255, 255, 0.2)",
                radius: 6,
                pointerLabelWidth: 100,
                pointerLabelHeight: 90,
                activatePointersOnLongPress: true,
                autoAdjustPointerLabelPosition: false,
                pointerLabelComponent: (items: any[]) => {
                  return (
                    <View style={styles.tooltipContainer}>
                      <Text style={styles.tooltipPrice}>
                        ${items[0].value.toFixed(2)}
                      </Text>
                    </View>
                  );
                },
              }}
            />
          )}
        </View>

        {/* Timeframe Selector */}
        <View style={styles.timeRangeContainer}>
          {TIME_RANGES.map((range) => {
            const isActive = selectedRange === range.label;
            return (
              <TouchableOpacity
                key={range.label}
                style={[
                  styles.timeRangeButton,
                  isActive && styles.timeRangeButtonActive,
                ]}
                onPress={() => setSelectedRange(range.label)}
              >
                <Text
                  style={[
                    styles.timeRangeText,
                    isActive && styles.timeRangeTextActive,
                  ]}
                >
                  {range.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: COLORS.success }]}
          >
            <Text style={styles.actionBtnText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: COLORS.error }]}
          >
            <Text style={styles.actionBtnText}>Sell</Text>
          </TouchableOpacity>
        </View>

        {/* Your Holdings (Mock for now, wire to wallet API later) */}
        <View style={styles.sectionContainer}>
          <View style={styles.holdingsCard}>
            <View>
              <Text style={styles.sectionTitleSmall}>Your Holdings</Text>
              <Text style={styles.holdingsValue}>
                0.00 {coinData.symbol.toUpperCase()}
              </Text>
              <Text style={styles.holdingsFiat}>≈ $0.00</Text>
            </View>
            <TouchableOpacity style={styles.addMoreButton}>
              <Ionicons name="add" size={24} color={COLORS.success} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Market Stats Grid (Real Data) */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Market Stats</Text>
          <View style={styles.statsGrid}>
            <StatItem
              label="Market Cap"
              value={`$${(coinData.market_data.market_cap.usd / 1e9).toFixed(2)}B`}
            />
            <StatItem
              label="Volume (24h)"
              value={`$${(coinData.market_data.total_volume.usd / 1e9).toFixed(2)}B`}
            />
            <StatItem
              label="Circulating"
              value={`${(coinData.market_data.circulating_supply / 1e6).toFixed(1)}M`}
            />
            <StatItem
              label="All Time High"
              value={`$${coinData.market_data.ath.usd}`}
            />
          </View>
        </View>

        {/* About & News */}
        <View style={styles.sectionContainer}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionHeader}>About {coinData.name}</Text>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color={COLORS.textSecondary}
            />
          </View>
          <Text style={styles.aboutText} numberOfLines={5}>
            {cleanDescription(coinData.description.en)}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper Component for Stats
const StatItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.statItem}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconButton: {
    padding: 8,
  },
  headerTitleContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  coinIconSmall: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
  },
  headerActions: {
    flexDirection: "row",
  },
  priceContainer: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  currentPrice: {
    fontSize: 36,
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
  },
  priceChangeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  priceChangeText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    marginLeft: 4,
  },
  timeLabel: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginLeft: 4,
    fontFamily: FONTS.regular,
  },
  chartContainer: {
    height: 240,
    justifyContent: "center",
    marginLeft: -10,
  },
  tooltipContainer: {
    backgroundColor: COLORS.cardBg,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  tooltipPrice: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
    fontSize: 14,
    textAlign: "center",
  },
  timeRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  timeRangeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  timeRangeButtonActive: {
    backgroundColor: COLORS.cardBg,
  },
  timeRangeText: {
    color: COLORS.textSecondary,
    fontFamily: FONTS.medium,
    fontSize: 13,
  },
  timeRangeTextActive: {
    color: COLORS.textPrimary,
    fontFamily: FONTS.bold,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtnText: {
    color: "#FFF",
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  holdingsCard: {
    backgroundColor: COLORS.cardBg,
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitleSmall: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontFamily: FONTS.medium,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  holdingsValue: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontFamily: FONTS.bold,
  },
  holdingsFiat: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  addMoreButton: {
    backgroundColor: "rgba(38, 161, 123, 0.1)",
    padding: 10,
    borderRadius: 12,
  },
  sectionHeader: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontFamily: FONTS.bold,
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  statItem: {
    width: (width - 44) / 2,
    backgroundColor: COLORS.cardBg,
    padding: 12,
    borderRadius: 12,
  },
  statLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
    fontFamily: FONTS.regular,
  },
  statValue: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  aboutText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
    fontFamily: FONTS.regular,
  },
});
