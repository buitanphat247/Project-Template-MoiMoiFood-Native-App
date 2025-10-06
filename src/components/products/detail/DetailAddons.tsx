import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export type Addon = { id: string; name: string; price: number; icon?: string };

type DetailAddonsProps = {
  title?: string;
  addons: Addon[];
  selectedId: string | null;
  onToggle: (id: string | null) => void;
};

export default function DetailAddons({ title = "Choice of Add On", addons, selectedId, onToggle }: DetailAddonsProps) {
  const renderAddon = ({ item }: { item: Addon }) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        onPress={() => onToggle(isSelected ? null : item.id)}
        activeOpacity={0.8}
        style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 12 }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image source={{ uri: item.icon || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=200&auto=format&fit=crop" }} style={{ width: 28, height: 28, borderRadius: 6 }} />
          <Text style={{ color: "#111827" }}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={{ color: "#374151" }}>{`+$${item.price.toFixed(2)}`}</Text>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: isSelected ? "#F97316" : "#D1D5DB",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isSelected && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#F97316" }} />}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "700", color: "#111827" }}>{title}</Text>
      <FlatList
        data={addons}
        keyExtractor={(i) => i.id}
        renderItem={renderAddon}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        scrollEnabled={false}
      />
    </View>
  );
}


