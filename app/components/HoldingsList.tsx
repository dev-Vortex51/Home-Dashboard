import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { memo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../constants/constants";
import type { Coin } from "../types/home";
import { formatChange, formatCurrency } from "../utils/utils";

const CoinIcon = memo(
  ({ url, symbol }: { url?: string; symbol: string }) => {
    const [error, setError] = useState(false);

    if (url && !error) {
      return (
        <Image
          source={url}
          style={styles.coinImage}
          onError={() => setError(true)}
        />
      );
    }

    return (
      <View style={styles.coinFallback}>
        <Text style={styles.coinFallbackText}>{symbol[0]}</Text>
      </View>
    );
  },
  (prevProps, nextProps) =>
    prevProps.url === nextProps.url && prevProps.symbol === nextProps.symbol,
);
CoinIcon.displayName = "CoinIcon";

interface Props {
  holdings: Coin[];
  onPressRow: (coinId: string) => void;
}

export const HoldingsList = memo(
  ({ holdings, onPressRow }: Props) => {
    return (
      <View style={styles.container}>
        {holdings.map((coin, index) => {
          const isPositive = coin.change24h >= 0;
          const isLast = index === holdings.length - 1;

          return (
            <TouchableOpacity
              key={coin.coinId}
              style={[styles.row, isLast && styles.rowNoBorder]}
              onPress={() => onPressRow(coin.coinId)}
              activeOpacity={0.7}
            >
              <View style={styles.leftSection}>
                <CoinIcon url={coin.logo} symbol={coin.symbol} />
                <View style={styles.nameColumn}>
                  <Text style={styles.name}>{coin.name}</Text>
                  <Text style={styles.symbol}>{coin.symbol}</Text>
                </View>
              </View>

              <View style={styles.rightSection}>
                <Text style={styles.value}>{formatCurrency(coin.value)}</Text>

                <View style={styles.changeBadge}>
                  <Ionicons
                    name={isPositive ? "caret-up" : "caret-down"}
                    size={10}
                    color={isPositive ? COLORS.success : COLORS.error}
                    style={{ marginRight: 2 }}
                  />
                  <Text
                    style={[
                      styles.changeText,
                      { color: isPositive ? COLORS.success : COLORS.error },
                    ]}
                  >
                    {formatChange(coin.change24h)}
                  </Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={16} color={COLORS.muted} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  },
  (prevProps, nextProps) =>
    prevProps.holdings === nextProps.holdings &&
    prevProps.onPressRow === nextProps.onPressRow,
);
HoldingsList.displayName = "HoldingsList";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 24,
    paddingHorizontal: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  rowNoBorder: {
    borderBottomWidth: 0,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  coinImage: {
    width: 30,
    height: 30,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  coinFallback: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.border,
    justifyContent: "center",
    alignItems: "center",
  },
  coinFallbackText: {
    color: COLORS.textPrimary,
    fontWeight: "700",
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  nameColumn: {
    gap: 2,
  },
  name: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    fontFamily: FONTS.light,
  },
  symbol: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: FONTS.medium,
  },

  rightSection: {
    alignItems: "flex-end",
    gap: 4,
  },
  value: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "600",
    fontVariant: ["tabular-nums"],
    fontFamily: FONTS.light,
  },
  changeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  changeText: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: FONTS.light,
  },
});
