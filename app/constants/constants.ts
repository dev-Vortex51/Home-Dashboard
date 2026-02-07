import { Feather, Ionicons } from "@expo/vector-icons";
import type { Href } from "expo-router";
import type { ComponentProps } from "react";

export type NotificationCategory = "today" | "yesterday" | "earlier";

export type NotificationType =
  | "price"
  | "ai"
  | "rugpull"
  | "portfolio"
  | "security"
  | "feature"
  | "social";

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  relativeTime: string;
  category: NotificationCategory;
  unread: boolean;
  type: NotificationType;
  destination: string;
}

export const SECTION_DEFINITIONS: {
  key: NotificationCategory;
  label: string;
}[] = [
  { key: "today", label: "Today" },
  { key: "yesterday", label: "Yesterday" },
  { key: "earlier", label: "Earlier" },
];

const iconName = (name: ComponentProps<typeof Ionicons>["name"]) => name;

export const TYPE_META: Record<
  NotificationType,
  { icon: ComponentProps<typeof Ionicons>["name"]; color: string }
> = {
  price: { icon: iconName("trending-up"), color: "#FFB800" },
  ai: { icon: iconName("sparkles"), color: "#246BFD" },
  rugpull: { icon: iconName("warning"), color: "#FF4757" },
  portfolio: { icon: iconName("stats-chart"), color: "#00D084" },
  security: { icon: iconName("shield-checkmark"), color: "#FF4757" },
  feature: { icon: iconName("sparkles"), color: "#246BFD" },
  social: { icon: iconName("people"), color: "#A0A0A0" },
};

export const COLORS = {
  background: "#08080D",
  cardBg: "#15151F",
  primary: "#246BFD",
  success: "#00D084",
  warning: "#FFB800",
  error: "#FF4757",
  textPrimary: "#FFFFFF",
  textSecondary: "#9AA0B5",
  border: "#232334",
  muted: "#1F1F2C",
};

export const chartHeight = 64;
export const DATA_REFRESH_DELAY = 650;

export type QuickActionConfig = {
  label: string;
  destination: Href;
  icon: ComponentProps<typeof Feather>["name"];
};

export const QUICK_ACTIONS: QuickActionConfig[] = [
  { label: "Send", icon: "arrow-up-outline", destination: "/send" },
  { label: "Receive", icon: "arrow-down-outline", destination: "/receive" },
  { label: "Swap", icon: "swap-horizontal-outline", destination: "/swap" },
  { label: "Buy", icon: "card-outline", destination: "/buy-crypto" },
];

export const FONTS = {
  light: "Rubik_300Light",
  regular: "Rubik_400Regular",
  medium: "Rubik_500Medium",
  semiBold: "Rubik_600SemiBold",
  bold: "Rubik_700Bold",
};
