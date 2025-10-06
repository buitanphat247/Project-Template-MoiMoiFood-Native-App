import Feather from "@expo/vector-icons/Feather";
import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type SettingsListItemProps = {
  title: string;
  leading: ReactNode;
  onPress?: () => void;
};

export default function SettingsListItem({ title, leading, onPress }: SettingsListItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10 }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            backgroundColor: "#f3f4f6",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
          }}
        >
          {leading}
        </View>
        <Text style={{ fontSize: 16, color: "#111827" }}>{title}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#9ca3af" />
    </TouchableOpacity>
  );
}


