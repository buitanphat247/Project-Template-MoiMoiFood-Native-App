import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  rating: number;
  reviews: number;
  desc: string;
  favorite?: boolean;
};

type OverviewProductCardProps = {
  item: Product;
  onToggleFavorite: (id: string) => void;
};

export default function OverviewProductCard({ item, onToggleFavorite }: OverviewProductCardProps) {
  return (
    <View style={{ backgroundColor: "#ffffff", borderRadius: 18, overflow: "hidden", marginBottom: 14, shadowColor: "#000", shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 2 }}>
      <View style={{ position: "relative" }}>
        <Image source={{ uri: item.imageUrl }} style={{ width: "100%", height: 190 }} resizeMode="cover" />
        <View style={{ position: "absolute", top: 10, left: 10, backgroundColor: "#FFFFFF", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 }}>
          <Text style={{ fontWeight: "800", color: "#111827" }}>{item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onToggleFavorite(item.id)} style={{ position: "absolute", top: 10, right: 10, width: 36, height: 36, borderRadius: 18, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center" }}>
          <Ionicons name={item.favorite ? "heart" : "heart-outline"} size={20} color={item.favorite ? "#ef4444" : "#111827"} />
        </TouchableOpacity>
        <View style={{ position: "absolute", bottom: 12, left: 0, right: 0, alignItems: "center" }}>
          <View style={{ backgroundColor: "#fff", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6, flexDirection: "row", alignItems: "center", gap: 6, borderWidth: 1, borderColor: "#F59E0B" }}>
            <Text style={{ fontWeight: "800", color: "#111827" }}>{item.rating.toFixed(1)}</Text>
            <Ionicons name="star" size={14} color="#F59E0B" />
            <Text style={{ color: "#6B7280" }}>({item.reviews}+)</Text>
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 14, paddingTop: 16, paddingBottom: 14 }}>
        <Text style={{ fontSize: 16, fontWeight: "800", color: "#111827" }} numberOfLines={1}>{item.name}</Text>
        <Text style={{ marginTop: 6, color: "#6B7280" }} numberOfLines={2}>{item.desc}</Text>
      </View>
    </View>
  );
}


