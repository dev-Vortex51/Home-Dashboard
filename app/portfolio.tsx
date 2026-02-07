import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart, PieChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { HoldingsList } from "./components/HoldingsList";
import { COLORS } from "./constants/constants";
import { COIN_CATALOG } from "./data/coins";
import { MOCK_HOME_DATA } from "./data/mockData";
import { portfolioStyles as styles } from "./styles/portfolio.styles";
import { formatCurrency } from "./utils/utils";

const TIME_RANGES = ["1D", "1W", "1M", "3M", "1Y", "All"];

const LINE_DATA = [
  { value: 42000, label: "Mon" },
  { value: 43500, label: "Tue" },
  { value: 41200, label: "Wed" },
  { value: 44800, label: "Thu" },
  { value: 45603, label: "Fri" },
  { value: 46100, label: "Sat" },
  { value: 45900, label: "Sun" },
];

const ALLOCATION_DATA = [
  { value: 45, color: "#F7931A", text: COIN_CATALOG.btc.symbol },
  { value: 30, color: "#627EEA", text: COIN_CATALOG.eth.symbol },
  { value: 15, color: "#14F195", text: COIN_CATALOG.sol.symbol },
  { value: 10, color: COLORS.textSecondary, text: "Other" },
];

export default function PortfolioScreen() {
  const router = useRouter();
  const [selectedRange, setSelectedRange] = useState("1W");
  const { width } = Dimensions.get("window");
  const [currentPrice, setCurrentPrice] = useState(45603.44);

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Header */}
      <Header
        headerTitle="Portfolio"
        rightComponent={
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="#FFF" />
          </TouchableOpacity>
        }
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Balance Summary */}
        <View style={styles.summarySection}>
          <Text style={styles.label}>Total Balance</Text>
          <Text style={styles.balance}>{formatCurrency(currentPrice)}</Text>
          <View style={styles.changeBadge}>
            <Ionicons name="arrow-up" size={12} color={COLORS.success} />
            <Text style={styles.changeText}>+$1,245.30 (2.8%)</Text>
          </View>
        </View>

        {/* 3. Main Chart */}
        <View style={styles.chartContainer}>
          <View style={styles.rangeSelector}>
            {TIME_RANGES.map((range) => (
              <TouchableOpacity
                key={range}
                style={[
                  styles.rangeTab,
                  selectedRange === range && styles.rangeTabActive,
                ]}
                onPress={() => setSelectedRange(range)}
              >
                <Text
                  style={[
                    styles.rangeText,
                    selectedRange === range && styles.rangeTextActive,
                  ]}
                >
                  {range}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Centered Chart Wrapper */}
          <View style={styles.chartWrapper}>
            <LineChart
              data={LINE_DATA}
              areaChart
              curved
              height={200}
              width={width - 40}
              hideDataPoints
              color={COLORS.primary}
              thickness={2}
              startFillColor={COLORS.primary}
              endFillColor="transparent"
              startOpacity={0.3}
              endOpacity={0.0}
              initialSpacing={20}
              endSpacing={20}
              yAxisThickness={0}
              xAxisThickness={0}
              hideYAxisText
              hideRules
              pointerConfig={{
                pointerStripHeight: 160,
                pointerStripColor: "rgba(255,255,255,0.2)",
                pointerStripWidth: 2,
                pointerColor: "white",
                radius: 6,
                pointerLabelWidth: 100,
                pointerLabelHeight: 90,
                activatePointersOnLongPress: false,
                autoAdjustPointerLabelPosition: false,
                pointerComponent: () => <View style={styles.pointerDot} />,
                pointerLabelComponent: (items: any) => {
                  if (items[0]?.value) setCurrentPrice(items[0].value);
                  return null;
                },
              }}
            />
          </View>
        </View>

        {/* 4. Allocation Pie Chart */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Allocation</Text>
          <View style={styles.allocationCard}>
            <PieChart
              data={ALLOCATION_DATA}
              donut
              radius={50}
              innerRadius={38}
              backgroundColor={COLORS.cardBg}
            />
            <View style={styles.legendContainer}>
              {ALLOCATION_DATA.map((item) => (
                <View key={item.text} style={styles.legendItem}>
                  <View
                    style={[styles.legendDot, { backgroundColor: item.color }]}
                  />
                  <Text style={styles.legendName}>{item.text}</Text>
                  <Text style={styles.legendPercent}>{item.value}%</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 5. Assets List */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Your Assets</Text>
          <HoldingsList
            holdings={MOCK_HOME_DATA.holdings}
            onPressRow={(coinId) =>
              router.push({ pathname: "/coin/[id]", params: { id: coinId } })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
