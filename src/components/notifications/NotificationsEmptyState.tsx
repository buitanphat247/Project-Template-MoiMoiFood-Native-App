import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Text, View } from "react-native";

export default function NotificationsEmptyState() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", padding: 32, gap: 8 }}>
      <Feather name="bell-off" size={28} color="#9CA3AF" />
      <Text style={{ fontSize: 14, color: "#6B7280" }}>Không có thông báo nào</Text>
    </View>
  );
}


