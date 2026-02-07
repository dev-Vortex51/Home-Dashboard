import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, ScrollView, Share, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { COLORS } from "./constants/constants";
import { COIN_CATALOG } from "./data/coins";
import { receiveStyles as styles } from "./styles/receive.styles";

const ASSET = {
  ...COIN_CATALOG.btc,
  icon: "logo-bitcoin",
  color: "#F7931A",
  address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
};

const NETWORKS = ["Bitcoin", "Lightning"];

export default function ReceiveScreen() {
  const router = useRouter();
  const [selectedNetwork, setSelectedNetwork] = useState("Bitcoin");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(ASSET.address);
    Alert.alert("Copied", "Address copied to clipboard");
  };

  const shareAddress = async () => {
    try {
      await Share.share({ message: ASSET.address });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. HEADER (Stays fixed at the top) */}
      <Header headerTitle="Receive Crypto" />

      {/* 2. SCROLLABLE CONTENT */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ASSET SELECTOR */}
        <Text style={styles.label}>Select Asset</Text>
        <Pressable style={styles.assetSelector}>
          <View style={styles.assetInfo}>
            <View style={[styles.coinIcon, { backgroundColor: ASSET.color }]}>
              <Ionicons name={ASSET.icon as any} size={20} color="white" />
            </View>
            <Text style={styles.assetName}>{ASSET.name}</Text>
          </View>
          <Ionicons
            name="chevron-down"
            size={20}
            color={COLORS.textSecondary}
          />
        </Pressable>

        {/* NETWORK SELECTOR */}
        <Text style={styles.label}>Select Network</Text>
        <View style={styles.networkContainer}>
          {NETWORKS.map((net) => (
            <Pressable
              key={net}
              onPress={() => setSelectedNetwork(net)}
              style={[
                styles.networkTab,
                selectedNetwork === net && styles.networkTabActive,
              ]}
            >
              <Text
                style={[
                  styles.networkText,
                  selectedNetwork === net && styles.networkTextActive,
                ]}
              >
                {net}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* QR CODE AREA */}
        <View style={styles.qrContainer}>
          <View style={styles.qrPlaceholder}>
            <Ionicons
              name="qr-code-outline"
              size={100}
              color="black"
              opacity={0.8}
            />
          </View>
        </View>

        {/* ADDRESS DISPLAY */}
        <Text style={styles.addressTitle}>Your {ASSET.symbol} Address</Text>
        <Pressable onPress={copyToClipboard} style={styles.addressBox}>
          <Text
            style={styles.addressText}
            numberOfLines={1}
            ellipsizeMode="middle"
          >
            {ASSET.address}
          </Text>
          <Ionicons name="copy-outline" size={18} color={COLORS.primary} />
        </Pressable>

        {/* ACTION BUTTONS */}
        <View style={styles.actionsRow}>
          <Pressable style={styles.actionButton} onPress={copyToClipboard}>
            <Ionicons name="copy" size={20} color={COLORS.primary} />
            <Text style={styles.actionText}>Copy Address</Text>
          </Pressable>
          <View style={styles.dividerVertical} />
          <Pressable style={styles.actionButton} onPress={shareAddress}>
            <Ionicons name="share-social" size={20} color={COLORS.primary} />
            <Text style={styles.actionText}>Share</Text>
          </Pressable>
        </View>

        {/* WARNING */}
        <View style={styles.warningContainer}>
          <Ionicons name="warning" size={20} color="#F7931A" />
          <Text style={styles.warningText}>
            Only send{" "}
            <Text style={{ fontWeight: "bold" }}>
              {ASSET.symbol} ({selectedNetwork})
            </Text>{" "}
            to this address. Sending any other asset may result in permanent
            loss.
          </Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
