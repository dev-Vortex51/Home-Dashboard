import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { COLORS } from "./constants/constants";
import { SWAP_ASSETS } from "./data/coins";
import { swapStyles as styles } from "./styles/swap.styles";

interface Asset {
  id: string;
  coinId: string;
  symbol: string;
  name: string;
  logo: string;
  icon: string;
  color: string;
  price: number;
  balance: number;
}

interface SwapCardProps {
  label: string;
  asset: Asset;
  amount: string;
  onChangeAmount?: (text: string) => void;
  fiatValue: string;
  readOnly?: boolean;
}

const SwapCard = ({
  label,
  asset,
  amount,
  onChangeAmount,
  fiatValue,
  readOnly,
}: SwapCardProps) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardLabel}>{label}</Text>
      <Text style={styles.balanceText}>
        Balance: {asset.balance} {asset.symbol}
      </Text>
    </View>

    <View style={styles.inputRow}>
      {/* Asset Selector */}
      <Pressable style={styles.assetSelector}>
        <View style={[styles.iconBadge, { backgroundColor: asset.color }]}>
          <Ionicons name={asset.icon as any} size={18} color="white" />
        </View>
        <Text style={styles.assetSymbol}>{asset.symbol}</Text>
        <Ionicons name="chevron-down" size={16} color={COLORS.textSecondary} />
      </Pressable>

      {/* Amount Input */}
      <TextInput
        style={[styles.input, readOnly && styles.inputReadOnly]}
        value={amount}
        onChangeText={onChangeAmount}
        placeholder="0.00"
        placeholderTextColor={COLORS.textSecondary}
        keyboardType="numeric"
        editable={!readOnly}
      />
    </View>

    <Text style={styles.fiatText}>≈ {fiatValue}</Text>
  </View>
);

// --- Main Screen ---
export default function SwapScreen() {
  const router = useRouter();

  // State
  const [fromAsset, setFromAsset] = useState<Asset>(SWAP_ASSETS.BTC);
  const [toAsset, setToAsset] = useState<Asset>(SWAP_ASSETS.ETH);
  const [amount, setAmount] = useState("");

  // Animation for Swap Button
  const rotation = useSharedValue(0);

  // Derived Values
  const exchangeRate = fromAsset.price / toAsset.price;
  const toAmount = amount ? (parseFloat(amount) * exchangeRate).toFixed(6) : "";

  const fromFiat = amount
    ? `$${(parseFloat(amount) * fromAsset.price).toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })}`
    : "$0.00";

  const toFiat = toAmount
    ? `$${(parseFloat(toAmount) * toAsset.price).toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })}`
    : "$0.00";

  // Handlers
  const handleSwapDirection = () => {
    // 1. Animate
    rotation.value = withSpring(rotation.value + 180);

    // 2. Swap Assets
    setFromAsset(toAsset);
    setToAsset(fromAsset);

    setAmount("");
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header headerTitle="Swap" />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* 1. FROM CARD */}
            <SwapCard
              label="From"
              asset={fromAsset}
              amount={amount}
              onChangeAmount={setAmount}
              fiatValue={fromFiat}
            />

            {/* 2. SWAP TRIGGER (Centered) */}
            <View style={styles.swapTriggerContainer}>
              <View style={styles.line} />
              <Pressable onPress={handleSwapDirection}>
                <Animated.View style={[styles.swapButton, animatedStyle]}>
                  <Ionicons
                    name="swap-vertical"
                    size={24}
                    color={COLORS.primary}
                  />
                </Animated.View>
              </Pressable>
              <View style={styles.line} />
            </View>

            {/* 3. TO CARD */}
            <SwapCard
              label="To"
              asset={toAsset}
              amount={toAmount}
              fiatValue={toFiat}
              readOnly
            />

            {/* 4. DETAILS */}
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Rate</Text>
                <Text style={styles.detailValue}>
                  1 {fromAsset.symbol} ≈ {exchangeRate.toFixed(4)}{" "}
                  {toAsset.symbol}
                </Text>
              </View>
              <Pressable style={styles.detailRow}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.detailLabel}>Slippage</Text>
                  <Ionicons
                    name="pencil"
                    size={12}
                    color={COLORS.textSecondary}
                    style={{ marginLeft: 4 }}
                  />
                </View>
                <Text style={styles.detailValue}>0.5%</Text>
              </Pressable>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Est. Fee</Text>
                <Text style={styles.detailValue}>$5.00</Text>
              </View>
            </View>
          </ScrollView>

          {/* 5. FOOTER ACTION */}
          <View style={styles.footer}>
            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                pressed && { opacity: 0.9 },
                !amount && styles.disabledButton,
              ]}
              onPress={() => {
                if (amount) {
                  console.log("Navigating to preview...");
                }
              }}
              disabled={!amount}
            >
              <Text style={styles.actionButtonText}>
                {amount ? "Preview Swap" : "Enter an amount"}
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
