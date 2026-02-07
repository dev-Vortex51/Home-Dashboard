import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/constants";

interface EmptyProps {
  onConnect: () => void;
  onAdd: () => void;
}

interface ErrorProps {
  onRetry: () => void;
}

export const EmptyState = ({ onConnect, onAdd }: EmptyProps) => (
  <View style={styles.emptyContainer}>
    <View style={styles.illustrationContainer}>
      <Ionicons name="analytics" size={48} color={COLORS.primary} />
    </View>
    <Text style={styles.emptyTitle}>No Portfolio Yet</Text>
    <Text style={styles.emptyBody}>
      Connect a wallet or add holdings manually to get started.
    </Text>
    <TouchableOpacity style={styles.primaryButton} onPress={onConnect}>
      <Text style={styles.primaryButtonText}>Connect Wallet</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.secondaryButton} onPress={onAdd}>
      <Text style={styles.secondaryButtonText}>Add Manually</Text>
    </TouchableOpacity>
  </View>
);

export const ErrorState = ({ onRetry }: ErrorProps) => (
  <View style={styles.errorCard}>
    <Ionicons name="warning" size={28} color={COLORS.warning} />
    <Text style={styles.errorTitle}>Something went wrong</Text>
    <Text style={styles.errorBody}>
      We could not refresh your dashboard. Please try again.
    </Text>
    <TouchableOpacity style={styles.primaryButton} onPress={onRetry}>
      <Text style={styles.primaryButtonText}>Retry</Text>
    </TouchableOpacity>
  </View>
);

export const LoadingState = () => (
  <View style={styles.loadingCard}>
    <ActivityIndicator color={COLORS.primary} size="small" />
    <Text style={styles.loadingText}>Loading your dashboard...</Text>
  </View>
);

const baseCard = {
  backgroundColor: COLORS.cardBg,
  borderRadius: 18,
  padding: 24,
  alignItems: "center" as const,
  gap: 12,
  marginTop: 20,
};

const styles = StyleSheet.create({
  emptyContainer: {
    marginTop: 20,
    alignItems: "center",
    padding: 24,
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
  },
  illustrationContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.muted,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  emptyTitle: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  emptyBody: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: COLORS.textPrimary,
    fontWeight: "700",
    fontSize: 15,
  },
  secondaryButton: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    backgroundColor: COLORS.muted,
  },
  secondaryButtonText: {
    color: COLORS.textPrimary,
    fontWeight: "600",
  },
  errorCard: {
    ...baseCard,
  },
  errorTitle: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "700",
  },
  errorBody: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textAlign: "center",
  },
  loadingCard: {
    ...baseCard,
  },
  loadingText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
});
