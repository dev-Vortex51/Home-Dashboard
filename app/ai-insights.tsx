import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { COLORS } from "./constants/constants";
import { COIN_CATALOG } from "./data/coins";
import { aiInsightsStyles as styles } from "./styles/ai-insights.styles";

// --- Mock Data ---
const FILTERS = ["All", "High Confidence", "BTC", "ETH", "Short Term"];

interface Prediction {
  id: string;
  coin: string;
  symbol: string;
  price: number;
  direction: "UP" | "DOWN";
  targetPrice: number;
  confidence: number;
  timeframe: string;
  reason: string;
  timestamp: string;
}

const PREDICTIONS: Prediction[] = [
  {
    id: "1",
    coin: COIN_CATALOG.btc.name,
    symbol: COIN_CATALOG.btc.symbol,
    price: COIN_CATALOG.btc.price,
    direction: "UP",
    targetPrice: 43800,
    confidence: 85,
    timeframe: "24h",
    reason:
      "Strong support at $42k combined with rising RSI indicating momentum reversal.",
    timestamp: "10m ago",
  },
  {
    id: "2",
    coin: COIN_CATALOG.eth.name,
    symbol: COIN_CATALOG.eth.symbol,
    price: COIN_CATALOG.eth.price,
    direction: "DOWN",
    targetPrice: 2100,
    confidence: 65,
    timeframe: "4h",
    reason:
      "Facing resistance at 50-day MA. Volume decreasing on upward moves.",
    timestamp: "35m ago",
  },
  {
    id: "3",
    coin: COIN_CATALOG.sol.name,
    symbol: COIN_CATALOG.sol.symbol,
    price: COIN_CATALOG.sol.price,
    direction: "UP",
    targetPrice: 110,
    confidence: 92,
    timeframe: "7d",
    reason:
      "Network activity ATH and new partnership announcements driving sentiment.",
    timestamp: "1h ago",
  },
  {
    id: "4",
    coin: COIN_CATALOG.ada.name,
    symbol: COIN_CATALOG.ada.symbol,
    price: COIN_CATALOG.ada.price,
    direction: "DOWN",
    targetPrice: 0.51,
    confidence: 55,
    timeframe: "12h",
    reason: "MacD bearish crossover observed on the 4H chart.",
    timestamp: "2h ago",
  },
];

const PredictionCard = ({
  item,
  onPress,
}: {
  item: Prediction;
  onPress: () => void;
}) => {
  const isBullish = item.direction === "UP";
  const badgeColor = isBullish ? COLORS.success : COLORS.error;
  const arrowIcon = isBullish ? "trending-up" : "trending-down";

  return (
    <Pressable
      onPress={onPress}
      style={styles.card}
      android_ripple={{ color: "rgba(255,255,255,0.1)" }}
    >
      {/* Header Row: Coin + Time */}
      <View style={styles.cardHeader}>
        <View style={styles.coinBadge}>
          <View
            style={[
              styles.iconPlaceholder,
              { backgroundColor: isBullish ? "#26A17B20" : "#EF444420" },
            ]}
          >
            <Ionicons
              name={isBullish ? "arrow-up" : "arrow-down"}
              size={16}
              color={badgeColor}
            />
          </View>
          <View>
            <Text style={styles.coinSymbol}>{item.symbol}</Text>
            <Text style={styles.coinName}>{item.coin}</Text>
          </View>
        </View>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>

      {/* Main Prediction Info */}
      <View style={styles.predictionBody}>
        <View>
          <Text style={styles.targetLabel}>Target ({item.timeframe})</Text>
          <Text style={[styles.targetPrice, { color: badgeColor }]}>
            ${item.targetPrice.toLocaleString()}
          </Text>
        </View>

        {/* Confidence Meter */}
        <View style={styles.confidenceContainer}>
          <Text style={styles.confidenceLabel}>Confidence</Text>
          <View style={styles.meterBg}>
            <View
              style={[
                styles.meterFill,
                { width: `${item.confidence}%`, backgroundColor: badgeColor },
              ]}
            />
          </View>
          <Text style={styles.confidenceValue}>{item.confidence}%</Text>
        </View>
      </View>

      {/* Reasoning Snippet */}
      <View style={styles.reasonContainer}>
        <Ionicons name="bulb-outline" size={14} color={COLORS.textSecondary} />
        <Text style={styles.reasonText} numberOfLines={2}>
          {item.reason}
        </Text>
      </View>
    </Pressable>
  );
};

// --- Main Screen ---
export default function AIPredictionsScreen() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleAskAI = () => {
    console.log("Navigating to AI Chat screen");
  };

  const handlePredictionPress = (id: string) => {
    router.push({ pathname: "/ai-insight/[id]", params: { id } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <Header headerTitle="AI Insights" />

      {/* Filter Row */}
      <View style={styles.filterContainer}>
        <FlatList
          data={FILTERS}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContent}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            const isActive = selectedFilter === item;
            return (
              <Pressable
                onPress={() => setSelectedFilter(item)}
                style={[styles.filterChip, isActive && styles.filterChipActive]}
              >
                <Text
                  style={[
                    styles.filterText,
                    isActive && styles.filterTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      {/* Predictions List */}
      <FlatList
        data={PREDICTIONS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <PredictionCard
            item={item}
            onPress={() => handlePredictionPress(item.id)}
          />
        )}
      />

      <Pressable style={styles.fab} onPress={handleAskAI}>
        <Ionicons name="chatbubbles" size={24} color="white" />
        <Text style={styles.fabText}>Ask AI</Text>
      </Pressable>
    </SafeAreaView>
  );
}
