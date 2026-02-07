import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { COLORS } from "./constants/constants";
import { SEND_ASSETS } from "./data/coins";
import { sendStyles as styles } from "./styles/send.styles";

const PERCENTAGES = [25, 50, 75, 100];

export default function SendScreen() {
  const router = useRouter();

  // State
  const [selectedAsset, setSelectedAsset] = useState(SEND_ASSETS[0]);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [isUsdMode, setIsUsdMode] = useState(false);
  const handlePercentagePress = (percent: number) => {
    const value = selectedAsset.balance * (percent / 100);
    setAmount(value.toString());
  };

  const handlePreview = () => {
    console.log("Preview Send", {
      address,
      amount,
      asset: selectedAsset.symbol,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          {/* 1. Header */}
          <Header headerTitle="Send Crypto" />

          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* 2. Asset Selector */}
            <Text style={styles.label}>Select Asset</Text>
            <TouchableOpacity style={styles.assetSelector}>
              <View style={styles.assetRow}>
                <View style={styles.coinIconPlaceholder} />
                {/* You can replace placeholder with <Image /> using selectedAsset.logo */}
                <View>
                  <Text style={styles.assetSymbol}>{selectedAsset.symbol}</Text>
                  <Text style={styles.assetBalance}>
                    Balance: {selectedAsset.balance} {selectedAsset.symbol}
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-down"
                size={20}
                color={COLORS.textSecondary}
              />
            </TouchableOpacity>

            {/* 3. Recipient Address */}
            <Text style={styles.label}>Recipient Address</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter or paste address"
                placeholderTextColor={COLORS.textSecondary}
                value={address}
                onChangeText={setAddress}
                autoCapitalize="none"
              />
              <View style={styles.inputIcons}>
                <TouchableOpacity onPress={() => console.log("Paste")}>
                  <Text style={styles.pasteText}>PASTE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Scan QR")}>
                  <Ionicons
                    name="qr-code-outline"
                    size={20}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* 4. Amount Input */}
            <View style={styles.amountHeader}>
              <Text style={styles.label}>Amount</Text>
              <TouchableOpacity onPress={() => setIsUsdMode(!isUsdMode)}>
                <Text style={styles.currencyToggle}>
                  Use {isUsdMode ? selectedAsset.symbol : "USD"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.amountContainer}>
              <TextInput
                style={styles.largeInput}
                placeholder="0.00"
                placeholderTextColor={COLORS.textSecondary}
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
              />
              <Text style={styles.inputSuffix}>
                {isUsdMode ? "USD" : selectedAsset.symbol}
              </Text>
            </View>

            {/* 5. Percentage Toggles */}
            <View style={styles.percentRow}>
              {PERCENTAGES.map((p) => (
                <TouchableOpacity
                  key={p}
                  style={styles.percentBtn}
                  onPress={() => handlePercentagePress(p)}
                >
                  <Text style={styles.percentText}>
                    {p === 100 ? "MAX" : `${p}%`}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* 6. Network Fee Info */}
            <View style={styles.feeContainer}>
              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Network Fee</Text>
                <Text style={styles.feeValue}>~$2.50</Text>
              </View>
              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Arrival Time</Text>
                <Text style={styles.feeValue}>≈ 10 mins</Text>
              </View>
            </View>
          </ScrollView>

          {/* 7. Footer Action Button */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.previewButton}
              onPress={handlePreview}
            >
              <Text style={styles.previewText}>Preview Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
