import { Href, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo } from "react";
import { RefreshControl, ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AiInsightCard } from "../components/AiInsightCard";
import { DashboardHeader } from "../components/DashboardHeader";
import { HoldingsList } from "../components/HoldingsList";
import { MarketMovers } from "../components/MarketMovers";
import { PortfolioCard } from "../components/PortfolioCard";
import { QuickActionsRow } from "../components/QuickActionsRow";
import { SectionHeader } from "../components/SectionHeader";
import { EmptyState, ErrorState, LoadingState } from "../components/States";
import { COLORS, QUICK_ACTIONS } from "../constants/constants";
import { MOCK_HOME_DATA } from "../data/mockData";
import { useHomeDashboardData } from "../hooks/useHomeDashboardData";
import { indexStyles as styles } from "../styles/index.styles";

const HomeScreen = () => {
  const { data, status, refreshing, refresh } = useHomeDashboardData();
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/notifications");
  }, [router]);

  const handleNavigate = useCallback(
    (destination: Href) => {
      router.push(destination);
    },
    [router],
  );

  const displayedUser = data?.user ?? MOCK_HOME_DATA.user;
  const marketMoversData = data?.marketMovers ?? MOCK_HOME_DATA.marketMovers;

  const content = useMemo(() => {
    if (status === "loading") {
      return <LoadingState />;
    }

    if (status === "error") {
      return <ErrorState onRetry={refresh} />;
    }

    if (status === "empty") {
      return (
        <View style={styles.contentStack}>
          <EmptyState
            onConnect={() => router.push("/settings")}
            onAdd={() => router.push("/portfolio")}
          />
          <View style={styles.emptyStateSection}>
            <SectionHeader
              title="Trending Now"
              onPress={() => router.push("/market")}
            />
            <MarketMovers
              movers={marketMoversData}
              onPressCard={(coinId: string) =>
                router.push({ pathname: "/coin/[id]", params: { id: coinId } })
              }
            />
          </View>
        </View>
      );
    }

    if (!data) return null;

    const topInsight = data.aiInsights[0];

    return (
      <View style={styles.contentStack}>
        <PortfolioCard
          totalValue={data.portfolio.totalValue}
          changeValue={data.portfolio.change24h}
          changePercent={data.portfolio.changePercent24h}
          chartData={data.portfolio.chartData}
          onPress={() => router.push("/portfolio")}
        />

        <QuickActionsRow actions={QUICK_ACTIONS} onNavigate={handleNavigate} />

        <SectionHeader
          title="AI Insights"
          onPress={() => handleNavigate("/ai-insights")}
        />
        {topInsight && (
          <AiInsightCard
            insight={topInsight}
            onPress={() => handleNavigate("/ai-insight")}
          />
        )}

        <SectionHeader
          title="Your Holdings"
          onPress={() => router.push("/portfolio")}
        />
        <HoldingsList
          holdings={data.holdings}
          onPressRow={(coinId: string) =>
            router.push({ pathname: "/coin/[id]", params: { id: coinId } })
          }
        />

        <SectionHeader
          title="Market Movers"
          onPress={() => router.push("/market")}
        />
        <MarketMovers
          movers={data.marketMovers}
          onPressCard={(coinId: string) =>
            router.push({ pathname: "/coin/[id]", params: { id: coinId } })
          }
        />
      </View>
    );
  }, [data, handleNavigate, refresh, status, marketMoversData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <DashboardHeader
        firstName={displayedUser.firstName}
        unreadNotifications={displayedUser.unreadNotifications}
        onPressAvatar={() => handleNavigate("/settings")}
        onPressNotifications={() => router.push("/notifications")}
        onPressSettings={() => router.push("/settings")}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            tintColor={COLORS.primary}
            refreshing={refreshing}
            onRefresh={refresh}
          />
        }
      >
        {content}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
