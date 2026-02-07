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
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { COLORS, FONTS } from "./constants/constants";
import { COIN_CATALOG } from "./data/coins";
import { buyCryptoStyles as styles } from "./styles/buy-crypto.styles";

// --- Mock Data ---
const CRYPTO = {
  ...COIN_CATALOG.btc,
  icon: "logo-bitcoin",
  color: "#F7931A",
};

const PAYMENT_METHOD = {
  type: "Visa",
  last4: "4242",
  provider: "MoonPay",
  feePercent: 0.0299,
  feeFixed: 0.0,
};

const PRESET_AMOUNTS = ["50", "100", "250", "500"];

export default function BuyCryptoScreen() {
  const router = useRouter();
  const [amount, setAmount] = useState("100");

  // Calculations
  const usdAmount = parseFloat(amount) || 0;
  const fee = usdAmount * PAYMENT_METHOD.feePercent;
  const netAmount = Math.max(0, usdAmount - fee);
  const cryptoReceived = (netAmount / CRYPTO.price).toFixed(6);

  // Handlers
  const handlePresetPress = (val: string) => {
    setAmount(val);
    Keyboard.dismiss();
  };

  const handleContinue = () => {
    console.log(`Opening MoonPay for $${amount}...`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header headerTitle="Buy Crypto" />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={styles.content}>
            {/* 1. SELECT CRYPTO */}
            <Text style={styles.sectionLabel}>Select Crypto</Text>
            <Pressable style={styles.selectorCard}>
              <View style={styles.assetRow}>
                <View
                  style={[styles.iconBadge, { backgroundColor: CRYPTO.color }]}
                >
                  <Ionicons name={CRYPTO.icon as any} size={20} color="white" />
                </View>
                <Text style={styles.assetName}>{CRYPTO.name}</Text>
              </View>
              <View style={styles.dropdownBadge}>
                <Text style={styles.assetSymbol}>{CRYPTO.symbol}</Text>
                <Ionicons
                  name="chevron-down"
                  size={14}
                  color={COLORS.textSecondary}
                />
              </View>
            </Pressable>

            {/* 2. INPUT AMOUNT */}
            <Text style={styles.sectionLabel}>You Pay</Text>
            <View style={styles.inputContainer}>
              <View style={styles.currencyBadge}>
                <Text style={styles.currencyText}>USD</Text>
                <Ionicons
                  name="chevron-down"
                  size={12}
                  color={COLORS.textPrimary}
                />
              </View>
              <TextInput
                style={styles.input}
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor={COLORS.textSecondary}
              />
            </View>

            {/* Preset Amounts */}
            <View style={styles.presetRow}>
              {PRESET_AMOUNTS.map((val) => (
                <Pressable
                  key={val}
                  onPress={() => handlePresetPress(val)}
                  style={[
                    styles.presetChip,
                    amount === val && styles.presetChipActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.presetText,
                      amount === val && styles.presetTextActive,
                    ]}
                  >
                    ${val}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* 3. RECEIVE ESTIMATE */}
            <View style={styles.estimateContainer}>
              <Text style={styles.estimateLabel}>You Receive</Text>
              <Text style={styles.estimateValue}>
                ≈ {cryptoReceived} {CRYPTO.symbol}
              </Text>
            </View>

            {/* 4. PAYMENT METHOD */}
            <Text style={styles.sectionLabel}>Payment Method</Text>
            <Pressable style={styles.paymentCard}>
              <View style={styles.paymentRow}>
                <View style={styles.cardIcon}>
                  <Ionicons name="card" size={20} color={COLORS.primary} />
                </View>
                <View>
                  <Text style={styles.paymentTitle}>
                    {PAYMENT_METHOD.type} •••• {PAYMENT_METHOD.last4}
                  </Text>
                  <Text style={styles.paymentSubtitle}>
                    Provider: {PAYMENT_METHOD.provider}
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={COLORS.textSecondary}
              />
            </Pressable>

            {/* 5. FEE INFO */}
            <View style={styles.feeContainer}>
              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Processing Fee (2.99%)</Text>
                <Text style={styles.feeValue}>${fee.toFixed(2)}</Text>
              </View>
              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Network Fee</Text>
                <Text style={styles.feeValue}>Included</Text>
              </View>
              <View style={[styles.feeRow, { marginTop: 8 }]}>
                <Text style={[styles.feeLabel, { color: COLORS.textPrimary }]}>
                  Total Cost
                </Text>
                <Text
                  style={[
                    styles.feeValue,
                    { color: COLORS.textPrimary, fontFamily: FONTS.bold },
                  ]}
                >
                  ${usdAmount.toFixed(2)}
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* 6. FOOTER ACTION */}
          <View style={styles.footer}>
            <Pressable style={styles.actionButton} onPress={handleContinue}>
              <Text style={styles.actionText}>
                Continue to {PAYMENT_METHOD.provider}
              </Text>
              <Ionicons name="open-outline" size={18} color="white" />
            </Pressable>
            <Text style={styles.disclaimer}>
              You will be redirected to a third-party provider to complete this
              transaction.
            </Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
