import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../constants/constants";
import { CryptoApi } from "../services/api";
import { Coin } from "../services/types";
import { marketStyles as styles } from "../styles/market.styles";
import { debounce } from "../utils/utils";

const CATEGORIES = [
  { id: "defi", name: "DeFi", icon: "layers" },
  { id: "nft", name: "NFT", icon: "images" },
  { id: "layer1", name: "Layer 1", icon: "server" },
  { id: "meme", name: "Meme", icon: "happy" },
  { id: "ai", name: "AI", icon: "hardware-chip" },
];

const NEW_LISTINGS = [
  { id: "new1", symbol: "BLAST", name: "Blast", price: 2.45, change: 120 },
  { id: "new2", symbol: "PYTH", name: "Pyth", price: 0.45, change: 45 },
  { id: "new3", symbol: "JUP", name: "Jupiter", price: 0.88, change: 12 },
];

const TABS = ["All", "Gainers", "Losers", "Trending", "New"];

export default function MarketScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  // 1. New State for API Data
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Debounced search handler
  const debouncedSearch = useRef(
    debounce((query: string) => {
      setDebouncedSearchQuery(query);
    }, 300),
  ).current;

  // Handle search input with debounce
  const handleSearchChange = useCallback(
    (query: string) => {
      setSearchQuery(query);
      debouncedSearch(query);
    },
    [debouncedSearch],
  );

  // 2. Fetch Data Function
  const fetchMarketData = async () => {
    try {
      const data = await CryptoApi.getMarketCoins("usd", 1, 50);
      setCoins(data);
    } catch (error) {
      console.error("Failed to fetch market data:", error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchMarketData();
  };

  const filteredData = useMemo(() => {
    let data = [...coins];

    if (debouncedSearchQuery) {
      data = data.filter(
        (c) =>
          c.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
          c.symbol.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
      );
    }

    switch (activeTab) {
      case "Gainers":
        return data
          .filter((c) => c.price_change_percentage_24h > 0)
          .sort(
            (a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h,
          );
      case "Losers":
        return data
          .filter((c) => c.price_change_percentage_24h < 0)
          .sort(
            (a, b) =>
              a.price_change_percentage_24h - b.price_change_percentage_24h,
          );
      case "Trending":
        return data.sort(
          (a, b) =>
            Math.abs(b.price_change_percentage_24h) -
            Math.abs(a.price_change_percentage_24h),
        );
      case "New":
        return data.sort((a, b) => b.market_cap_rank - a.market_cap_rank);
      case "All":
      default:
        return data.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
    }
  }, [activeTab, debouncedSearchQuery, coins]);

  const renderCoinItem = ({ item }: { item: Coin }) => {
    const change = item.price_change_percentage_24h || 0;
    const isPositive = change >= 0;

    return (
      <TouchableOpacity
        style={styles.coinRow}
        onPress={() =>
          router.push({ pathname: "/coin/[id]", params: { id: item.id } })
        }
      >
        <View style={styles.leftCol}>
          <Text style={styles.rankText}>{item.market_cap_rank}</Text>

          <Image source={{ uri: item.image }} style={styles.coinIcon} />

          <View>
            <Text style={styles.coinSymbol}>{item.symbol.toUpperCase()}</Text>
            <Text style={styles.coinName}>{item.name}</Text>
          </View>
        </View>

        <View style={styles.rightCol}>
          <Text style={styles.priceText}>
            $
            {item.current_price?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 6,
            })}
          </Text>

          <View
            style={[
              styles.changeBadge,
              {
                backgroundColor: isPositive
                  ? "rgba(16, 185, 129, 0.1)"
                  : "rgba(239, 68, 68, 0.1)",
              },
            ]}
          >
            <Ionicons
              name={isPositive ? "caret-up" : "caret-down"}
              size={12}
              color={isPositive ? COLORS.success : COLORS.error}
            />
            <Text
              style={[
                styles.changeText,
                { color: isPositive ? COLORS.success : COLORS.error },
              ]}
            >
              {Math.abs(change).toFixed(2)}%
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isFilterModalVisible}
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter & Sort</Text>
              <TouchableOpacity onPress={() => setFilterModalVisible(false)}>
                <Ionicons name="close" size={24} color={COLORS.textPrimary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLabel}>Sort By</Text>
            <View style={styles.modalOptions}>
              {["Market Cap", "Volume", "Price", "Name"].map((opt) => (
                <TouchableOpacity key={opt} style={styles.modalChip}>
                  <Text style={styles.modalChipText}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.modalLabel}>Time Period</Text>
            <View style={styles.modalOptions}>
              {["1H", "24H", "7D", "30D"].map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={[
                    styles.modalChip,
                    opt === "24H" && styles.modalChipActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.modalChipText,
                      opt === "24H" && { color: "#FFF" },
                    ]}
                  >
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setFilterModalVisible(false)}
            >
              <Text style={styles.applyButtonText}>Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderCoinItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.primary}
          />
        }
        ListHeaderComponent={
          <>
            <View style={styles.headerContainer}>
              <Text style={styles.screenTitle}>Market</Text>
            </View>

            <View style={styles.searchRow}>
              <TouchableOpacity style={styles.searchBar} onPress={() => {}}>
                <Ionicons
                  name="search"
                  size={20}
                  color={COLORS.textSecondary}
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.searchPlaceholder}>Search coins...</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => setFilterModalVisible(true)}
              >
                <Ionicons name="options" size={20} color={COLORS.textPrimary} />
              </TouchableOpacity>
            </View>

            {/* Tabs */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.tabsScroll}
            >
              {TABS.map((tab) => (
                <TouchableOpacity
                  key={tab}
                  style={[
                    styles.tabItem,
                    activeTab === tab && styles.tabItemActive,
                  ]}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === tab && styles.tabTextActive,
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Categories</Text>
              <TouchableOpacity onPress={() => {}}>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color={COLORS.textSecondary}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesScroll}
            >
              {CATEGORIES.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  style={styles.categoryCard}
                  onPress={() => {}}
                >
                  <View style={styles.categoryIconBg}>
                    <Ionicons
                      name={cat.icon as any}
                      size={24}
                      color={COLORS.primary}
                    />
                  </View>
                  <Text style={styles.categoryName}>{cat.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>New Listings</Text>
              <TouchableOpacity onPress={() => {}}>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color={COLORS.textSecondary}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.newListingsScroll}
            >
              {NEW_LISTINGS.map((coin) => (
                <TouchableOpacity key={coin.id} style={styles.newListingCard}>
                  <View style={styles.newListingTop}>
                    <Text style={styles.newListingSymbol}>{coin.symbol}</Text>
                    <View style={styles.newListingBadge}>
                      <Text style={styles.newListingBadgeText}>NEW</Text>
                    </View>
                  </View>
                  <Text style={styles.newListingPrice}>${coin.price}</Text>
                  <Text style={styles.newListingChange}>+{coin.change}%</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* List Header Labels */}
            <View style={styles.listHeaderLabels}>
              <Text style={styles.listHeaderLabelText}>Coin</Text>
              <Text style={styles.listHeaderLabelText}>Price / 24h</Text>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}
