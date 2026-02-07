import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../constants/constants";
import type { HomeScreenData } from "../types/home";

interface Props {
  insight: HomeScreenData["aiInsights"][number];
  onPress: () => void;
}

export const AiInsightCard = memo(
  ({ insight, onPress }: Props) => {
    const isHighConfidence = insight.confidence > 75;
    const confidenceColor = isHighConfidence ? COLORS.success : COLORS.primary;

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <LinearGradient
          colors={[COLORS.primary, "#8B5CF6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBorder}
          shouldRasterizeIOS={true}
        >
          <View style={styles.cardContent}>
            {/* Header: Icon + Symbol + Time */}
            <View style={styles.headerRow}>
              <View style={styles.iconBadge}>
                <Ionicons name="sparkles" size={16} color="#8B5CF6" />
              </View>
              <View style={styles.titleWrapper}>
                <Text style={styles.symbol}>{insight.coinSymbol}</Text>
                <Text style={styles.aiLabel}>AI Analysis</Text>
              </View>

              <View style={styles.timeBadge}>
                <Ionicons
                  name="time-outline"
                  size={12}
                  color={COLORS.textSecondary}
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.timeframe}>{insight.timeframe}</Text>
              </View>
            </View>

            <Text style={styles.prediction} numberOfLines={2}>
              {insight.prediction}
            </Text>

            <View style={styles.footerRow}>
              <Text style={styles.confidenceLabel}>Confidence Score</Text>
              <View style={styles.meterContainer}>
                <View style={styles.track}>
                  <View
                    style={[
                      styles.fill,
                      {
                        width: `${insight.confidence}%`,
                        backgroundColor: confidenceColor,
                      },
                    ]}
                  />
                </View>
                <Text style={[styles.percentText, { color: confidenceColor }]}>
                  {insight.confidence}%
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) =>
    prevProps.insight === nextProps.insight &&
    prevProps.onPress === nextProps.onPress,
);
AiInsightCard.displayName = "AiInsightCard";

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 24,
    padding: 1.5,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  cardContent: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 22,
    padding: 18,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "rgba(139, 92, 246, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  titleWrapper: {
    flex: 1,
  },
  symbol: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
    fontFamily: FONTS.medium,
  },
  aiLabel: {
    color: "#8B5CF6",
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    fontFamily: FONTS.medium,
  },
  timeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    fontFamily: FONTS.light,
  },
  timeframe: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: "500",
    fontFamily: FONTS.light,
  },
  prediction: {
    color: COLORS.textPrimary,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "400",
    marginBottom: 16,
    opacity: 0.9,
    fontFamily: FONTS.light,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.05)",
  },
  confidenceLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: FONTS.light,
  },
  meterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  track: {
    width: 80,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.1)",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 3,
  },
  percentText: {
    fontSize: 13,
    fontWeight: "700",
    fontFamily: FONTS.medium,
  },
});
