import { useRouter } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import {
  LayoutAnimation,
  Platform,
  RefreshControl,
  SectionList,
  StatusBar,
  Text,
  UIManager,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmptyNotifications } from "./components/EmptyNotifications";
import { NotificationHeader } from "./components/NotificationHeader";
import { NotificationRow } from "./components/NotificationRow";
import {
  COLORS,
  NotificationItem,
  SECTION_DEFINITIONS,
} from "./constants/constants";
import { MOCK_NOTIFICATIONS } from "./data/mockData";
import { notificationsStyles as styles } from "./styles/notifications.styles";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function NotificationsScreen() {
  const router = useRouter();
  const [items, setItems] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
  const [refreshing, setRefreshing] = useState(false);

  const unreadCount = items.filter((item) => item.unread).length;

  const sectionsData = useMemo(() => {
    return SECTION_DEFINITIONS.map((def) => ({
      title: def.label,
      data: items.filter((item) => item.category === def.key),
    })).filter((section) => section.data.length > 0);
  }, [items]);

  const onPressRow = useCallback((item: NotificationItem) => {
    setItems((prev) =>
      prev.map((row) => (row.id === item.id ? { ...row, unread: false } : row)),
    );
  }, []);

  const onDeleteRow = useCallback((itemId: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setItems((prev) => prev.filter((row) => row.id !== itemId));
  }, []);

  const onMarkAll = useCallback(() => {
    setItems((prev) => prev.map((row) => ({ ...row, unread: false })));
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(MOCK_NOTIFICATIONS);
      setRefreshing(false);
    }, 500);
  }, []);

  const renderSectionHeader = useCallback(
    ({ section: { title } }: any) => (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionLabel}>{title}</Text>
        <View style={styles.sectionLine} />
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <NotificationHeader
        unreadCount={unreadCount}
        onBack={() => router.back()}
        onMarkAll={onMarkAll}
      />

      <SectionList
        sections={sectionsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <NotificationRow
              item={item}
              onPress={onPressRow}
              onDelete={onDeleteRow}
            />
          </View>
        )}
        renderSectionHeader={renderSectionHeader}
        ListEmptyComponent={<EmptyNotifications />}
        initialNumToRender={8}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
        refreshControl={
          <RefreshControl
            tintColor={COLORS.primary}
            refreshing={refreshing}
            onRefresh={onRefresh}
            // progressViewOffset={72}
          />
        }
      />
    </SafeAreaView>
  );
}
