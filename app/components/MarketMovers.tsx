import type { HomeScreenData } from "@/app/types/home";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { memo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/constants";
import { formatCurrency } from "../utils/utils";

const CoinIcon = memo(
  ({ url, symbol }: { url?: string; symbol: string }) => {
    const [error, setError] = useState(false);
    if (url && !error) {
      return (
        <Image
          source={url}
          style={styles.iconImage}
          onError={() => setError(true)}
        />
      );
    }
    return (
      <View style={styles.iconFallback}>
        <Text style={styles.iconText}>{symbol[0]}</Text>
      </View>
    );
  },
  (prevProps, nextProps) =>
    prevProps.url === nextProps.url && prevProps.symbol === nextProps.symbol,
);
CoinIcon.displayName = "CoinIcon";

interface Props {
  movers: HomeScreenData["marketMovers"];
  onPressCard: (coinId: string) => void;
}

export const MarketMovers = memo(
  ({ movers, onPressCard }: Props) => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
      snapToInterval={CARD_WIDTH + CARD_GAP}
      decelerationRate="fast"
      snapToAlignment="start"
      shouldRasterizeIOS={true}
    >
      {movers.map((coin) => {
        const isPositive = coin.change24h >= 0;
        const trendColor = isPositive ? COLORS.success : COLORS.error;

        return (
          <TouchableOpacity
            key={coin.coinId}
            style={styles.card}
            onPress={() => onPressCard(coin.coinId)}
            activeOpacity={0.7}
          >
            <View style={styles.topRow}>
              <CoinIcon url={coin.logo} symbol={coin.symbol} />

              <View
                style={[
                  styles.trendBadge,
                  {
                    backgroundColor: isPositive
                      ? "rgba(34, 197, 94, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                  },
                ]}
              >
                <Ionicons
                  name={isPositive ? "arrow-up" : "arrow-down"}
                  size={10}
                  color={trendColor}
                />
                <Text style={[styles.trendText, { color: trendColor }]}>
                  {Math.abs(coin.change24h).toFixed(2)}%
                </Text>
              </View>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.symbol} numberOfLines={1}>
                {coin.symbol}
              </Text>
              <Text style={styles.price} numberOfLines={1}>
                {formatCurrency(coin.value)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  ),
  (prevProps, nextProps) =>
    prevProps.movers === nextProps.movers &&
    prevProps.onPressCard === nextProps.onPressCard,
);
MarketMovers.displayName = "MarketMovers";

const CARD_WIDTH = 100;
const CARD_HEIGHT = 120;
const CARD_GAP = 12;

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 4,
    paddingVertical: 10,
    gap: CARD_GAP,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    padding: 12,
    justifyContent: "space-between",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  iconFallback: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.border,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: COLORS.textPrimary,
    fontWeight: "700",
    fontSize: 16,
  },
  trendBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 2,
  },
  trendText: {
    fontSize: 12,
    fontWeight: "700",
  },
  infoContainer: {
    gap: 4,
  },
  symbol: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  price: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
});
