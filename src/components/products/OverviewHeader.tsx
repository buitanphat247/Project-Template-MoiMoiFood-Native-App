import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type OverviewHeaderProps = {
  onBack: () => void;
  query: string;
  onChangeQuery: (text: string) => void;
};

export default function OverviewHeader({ onBack, query, onChangeQuery }: OverviewHeaderProps) {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Android
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={0.8}
          style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: "#F3F4F6", alignItems: "center", justifyContent: "center" }}
        >
          <Feather name="chevron-left" size={20} color="#111827" />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F3F4F6",
            borderRadius: 12,
            paddingHorizontal: 12,
            height: 44,
          }}
        >
          <Feather name="search" size={18} color="#6B7280" />
          <TextInput
            value={query}
            onChangeText={onChangeQuery}
            placeholder="Tìm món ăn..."
            placeholderTextColor="#9CA3AF"
            style={{ marginLeft: 8, flex: 1, color: "#111827" }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "#111827", alignItems: "center", justifyContent: "center" }}
        >
          <Feather name="sliders" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
