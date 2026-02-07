import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Reanimated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { COLORS, NotificationItem, TYPE_META } from "../constants/constants";

interface RightActionProps {
  dragX: SharedValue<number>;
  onPress: () => void;
}

const RightAction = ({ dragX, onPress }: RightActionProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      dragX.value,
      [-80, 0],
      [1, 0],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      dragX.value,
      [-80, -20],
      [1, 0],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.deleteButtonContainer}
    >
      <Reanimated.View style={[styles.deleteContent, animatedStyle]}>
        <View style={styles.trashCircle}>
          <Ionicons name="trash-outline" size={20} color="#FFF" />
        </View>
        <Text style={styles.deleteText}>Delete</Text>
      </Reanimated.View>
    </TouchableOpacity>
  );
};

interface Props {
  item: NotificationItem;
  onPress: (item: NotificationItem) => void;
  onDelete: (itemId: string) => void;
}

export const NotificationRow = ({ item, onPress, onDelete }: Props) => {
  const meta = TYPE_META[item.type];

  return (
    <View style={styles.rowWrapper}>
      <Swipeable
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={(_, dragX) => (
          <RightAction dragX={dragX} onPress={() => onDelete(item.id)} />
        )}
        containerStyle={styles.swipeContainer}
      >
        <Pressable
          onPress={() => onPress(item)}
          style={({ pressed }) => [
            styles.row,
            pressed && styles.rowPressed,
            item.unread && styles.unreadRowBackground,
          ]}
        >
          <View
            style={[styles.iconBadge, { backgroundColor: `${meta.color}15` }]}
          >
            <Ionicons name={meta.icon} size={22} color={meta.color} />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.headerLine}>
              <Text
                style={[styles.title, item.unread && styles.unreadTitle]}
                numberOfLines={1}
              >
                {item.title}
              </Text>
              <Text style={styles.timestamp}>{item.relativeTime}</Text>
            </View>

            <Text
              style={[styles.description, item.unread && styles.unreadDesc]}
              numberOfLines={2}
            >
              {item.description}
            </Text>
          </View>

          {item.unread && <View style={styles.unreadDot} />}
        </Pressable>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  rowWrapper: {
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  swipeContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    padding: 18,
    backgroundColor: COLORS.cardBg,
    alignItems: "flex-start",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.03)",
  },
  unreadRowBackground: {
    backgroundColor: "#252530",
  },
  rowPressed: {
    backgroundColor: "#2A2A35",
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
    marginRight: 8,
    opacity: 0.9,
  },
  unreadTitle: {
    fontWeight: "700",
    opacity: 1,
  },
  timestamp: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: "500",
    opacity: 0.7,
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.8,
  },
  unreadDesc: {
    color: COLORS.textPrimary,
    opacity: 0.9,
  },
  unreadDot: {
    position: "absolute",
    top: 8,
    right: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },

  deleteButtonContainer: {
    width: 90,
    height: "100%",
    alignSelf: "stretch",
    paddingLeft: 10,
  },
  deleteContent: {
    backgroundColor: COLORS.error || "#FF4757",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  trashCircle: {
    opacity: 0.9,
  },
  deleteText: {
    color: "white",
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});
