import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { COLORS } from "../constants/constants";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

const screens = [
  {
    name: "index",
    title: "Home",
    activeIcon: "home",
    inactiveIcon: "home-outline",
  },
  {
    name: "market",
    title: "Market",
    activeIcon: "bar-chart",
    inactiveIcon: "bar-chart-outline",
  },
  {
    name: "ai",
    title: "AI",
    activeIcon: "aperture",
    inactiveIcon: "aperture-outline",
  },
  {
    name: "alerts",
    title: "Alerts",
    activeIcon: "notifications",
    inactiveIcon: "notifications-outline",
  },
  {
    name: "profile",
    title: "Profile",
    activeIcon: "person",
    inactiveIcon: "person-outline",
  },
];

const TabIcon = ({
  focused,
  activeIcon,
  inactiveIcon,
  color,
}: {
  focused: boolean;
  activeIcon: IconName;
  inactiveIcon: IconName;
  color: string;
}) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    if (focused) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      scale.value = withSpring(1.2, { damping: 10, stiffness: 100 });
    } else {
      scale.value = withSpring(1);
    }
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.iconContainer, animatedStyle]}>
      <Ionicons
        name={focused ? activeIcon : inactiveIcon}
        size={22}
        color={color}
      />
    </Animated.View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.labelStyle,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarItemStyle: {
          justifyContent: "center",
          paddingVertical: 4,
        },
      }}
    >
      {screens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                focused={focused}
                activeIcon={screen.activeIcon as IconName}
                inactiveIcon={screen.inactiveIcon as IconName}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    marginHorizontal: 16,

    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.cardBg,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: COLORS.border || "rgba(255,255,255,0.1)",

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  labelStyle: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 4,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
});
