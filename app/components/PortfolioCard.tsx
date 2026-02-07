import { Ionicons } from "@expo/vector-icons";
import React, { memo, useMemo } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-gifted-charts"; // <--- Import Library
import { COLORS, FONTS } from "../constants/constants";
import { formatChange, formatCurrency } from "../utils/utils";

interface Props {
  totalValue: number;
  changeValue: number;
  changePercent: number;
  chartData: number[];
  onPress: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const PortfolioCard = memo(
  ({ totalValue, changeValue, changePercent, chartData, onPress }: Props) => {
    const isPositive = changeValue >= 0;
    const trendColor = isPositive ? COLORS.success : COLORS.error;
    const iconName = isPositive ? "trending-up" : "trending-down";

    // Memoize line data transformation
    const lineData = useMemo(
      () => chartData.map((value) => ({ value })),
      [chartData],
    );

    return (
      <TouchableOpacity
        style={styles.portfolioCard}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <View style={styles.contentContainer}>
          {/* Header Label */}
          <View style={styles.headerRow}>
            <Text style={styles.cardLabel}>Total Portfolio Value</Text>
            <Ionicons
              name="wallet-outline"
              size={16}
              color={COLORS.textSecondary}
              style={{ opacity: 0.7 }}
            />
          </View>

          {/* Big Value */}
          <Text style={styles.portfolioValue}>
            {formatCurrency(totalValue)}
          </Text>

          {/* Change Row */}
          <View style={styles.changeRow}>
            <View
              style={[styles.iconBadge, { backgroundColor: `${trendColor}20` }]}
            >
              <Ionicons name={iconName} size={16} color={trendColor} />
            </View>
            <Text style={[styles.changeValue, { color: trendColor }]}>
              {changeValue > 0 ? "+" : ""}
              {formatCurrency(changeValue)}
            </Text>
            <Text style={[styles.changePercent, { color: trendColor }]}>
              ({formatChange(changePercent)})
            </Text>
          </View>
        </View>

        {/* 2. Gifted Chart Implementation */}
        <View style={styles.chartContainer}>
          <LineChart
            data={lineData}
            areaChart
            curved
            height={100}
            width={SCREEN_WIDTH - 20}
            hideDataPoints
            hideRules
            hideYAxisText
            hideAxesAndRules
            color={trendColor}
            thickness={2}
            startFillColor={trendColor}
            endFillColor={COLORS.cardBg}
            startOpacity={0.2}
            endOpacity={0.0}
            initialSpacing={0}
            endSpacing={0}
            adjustToWidth={true}
          />
        </View>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) =>
    prevProps.totalValue === nextProps.totalValue &&
    prevProps.changeValue === nextProps.changeValue &&
    prevProps.changePercent === nextProps.changePercent &&
    prevProps.chartData === nextProps.chartData &&
    prevProps.onPress === nextProps.onPress,
);
PortfolioCard.displayName = "PortfolioCard";

const styles = StyleSheet.create({
  portfolioCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
    overflow: "hidden",
    minHeight: 220,
    justifyContent: "space-between",
  },
  contentContainer: {
    padding: 24,
    paddingBottom: 0,
    zIndex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardLabel: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontFamily: FONTS.regular,
  },
  portfolioValue: {
    color: COLORS.textPrimary,
    fontSize: 40,
    letterSpacing: -0.5,
    marginBottom: 12,
    fontFamily: FONTS.bold,
  },
  changeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  changeValue: {
    fontSize: 16,
    marginRight: 6,
    fontFamily: FONTS.medium,
  },
  changePercent: {
    fontSize: 16,
    opacity: 0.8,
    fontFamily: FONTS.medium,
  },
  chartContainer: {
    height: 100,
    marginTop: 10,
    marginHorizontal: -20,
    marginBottom: -10,
    opacity: 1,
    alignItems: "center",
  },
});
