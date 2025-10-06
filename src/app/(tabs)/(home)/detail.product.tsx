import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Addon = { id: string; name: string; price: number; icon?: string };

const ADDONS: Addon[] = [
  { id: "pepper", name: "Pepper  Julienned", price: 2.3 },
  { id: "spinach", name: "Baby Spinach", price: 4.7 },
  { id: "mushroom", name: "Masroom", price: 2.5 },
];

export default function DetailProduct() {
  const router = useRouter();
  const [qty, setQty] = useState(2);
  const [selected, setSelected] = useState<string | null>(null);

  const renderAddon = ({ item }: { item: Addon }) => {
    const isSelected = selected === item.id;
    return (
      <TouchableOpacity
        onPress={() => setSelected(isSelected ? null : item.id)}
        activeOpacity={0.8}
        style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 12 }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=200&auto=format&fit=crop" }} style={{ width: 28, height: 28, borderRadius: 6 }} />
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
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Image + actions */}
        <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
          <View style={{ position: "relative" }}>
            <Image source={{ uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop" }} style={{ width: "100%", height: 190, borderRadius: 16 }} />
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8} style={{ position: "absolute", top: 10, left: 10, width: 32, height: 32, borderRadius: 16, backgroundColor: "#F3F4F6", alignItems: "center", justifyContent: "center" }}>
              <Feather name="chevron-left" size={18} color="#111827" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", top: 10, right: 10, width: 32, height: 32, borderRadius: 16, backgroundColor: "#F3F4F6", alignItems: "center", justifyContent: "center" }}>
              <Ionicons name="heart-outline" size={18} color="#111827" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Title + rating + price + qty */}
        <View style={{ paddingHorizontal: 16, marginTop: 12 }}>
          <Text style={{ fontSize: 22, fontWeight: "900", color: "#111827" }}>Ground Beef Tacos</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 8 }}>
            <Ionicons name="star" size={14} color="#F59E0B" />
            <Text style={{ fontWeight: "700", color: "#111827" }}>4.5</Text>
            <Text style={{ color: "#6B7280" }}>(30+)</Text>
            <TouchableOpacity><Text style={{ color: "#3B82F6", marginLeft: 6 }}>See Review</Text></TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
            <Text style={{ fontSize: 28, fontWeight: "900", color: "#EF4444" }}>$9.50</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <TouchableOpacity onPress={() => setQty((q) => Math.max(1, q - 1))} style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: "#D1D5DB", alignItems: "center", justifyContent: "center" }}>
                <Feather name="minus" size={16} color="#111827" />
              </TouchableOpacity>
              <Text style={{ width: 24, textAlign: "center", fontWeight: "700", color: "#111827" }}>{qty.toString().padStart(2, "0")}</Text>
              <TouchableOpacity onPress={() => setQty((q) => q + 1)} style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "#F97316", alignItems: "center", justifyContent: "center" }}>
                <Feather name="plus" size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={{ color: "#6B7280", marginTop: 10, lineHeight: 20 }}>
            Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder.
          </Text>
        </View>

        {/* Choice of add on */}
        <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
          <Text style={{ fontWeight: "800", color: "#111827" }}>Choice of Add On</Text>
          <FlatList
            data={ADDONS}
            keyExtractor={(i) => i.id}
            renderItem={renderAddon}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            scrollEnabled={false}
          />
        </View>

        {/* Add to cart */}
        <View style={{ paddingHorizontal: 16, marginTop: 20, marginBottom: 10 }}>
          <TouchableOpacity activeOpacity={0.85} style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, backgroundColor: "#F97316", height: 48, borderRadius: 999 }}>
            <Ionicons name="cart" size={18} color="#FFFFFF" />
            <Text style={{ color: "#FFFFFF", fontWeight: "800" }}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
