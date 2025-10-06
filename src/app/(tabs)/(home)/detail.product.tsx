import styles from "@/styles/screens_home/detail.product.styles";
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
    <SafeAreaView edges={["top", "left", "right"]} style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Image + actions */}
        <View style={styles.imageWrap}>
          <View style={styles.imageBox}>
            <Image source={{ uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop" }} style={styles.hero} />
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8} style={styles.backBtn}>
              <Feather name="chevron-left" size={18} color="#111827" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.heartBtn}>
              <Ionicons name="heart-outline" size={18} color="#111827" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Title + rating + price + qty */}
        <View style={styles.content}>
          <Text style={styles.title}>Ground Beef Tacos</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#F59E0B" />
            <Text style={{ fontWeight: "700", color: "#111827" }}>4.5</Text>
            <Text style={{ color: "#6B7280" }}>(30+)</Text>
            <TouchableOpacity><Text style={{ color: "#3B82F6", marginLeft: 6 }}>See Review</Text></TouchableOpacity>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.price}>$9.50</Text>
            <View style={styles.qtyRow}>
              <TouchableOpacity onPress={() => setQty((q) => Math.max(1, q - 1))} style={styles.qtyBtnMinus}>
                <Feather name="minus" size={16} color="#111827" />
              </TouchableOpacity>
              <Text style={{ width: 24, textAlign: "center", fontWeight: "700", color: "#111827" }}>{qty.toString().padStart(2, "0")}</Text>
              <TouchableOpacity onPress={() => setQty((q) => q + 1)} style={styles.qtyBtnPlus}>
                <Feather name="plus" size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.desc}>
            Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder.
          </Text>
        </View>

        {/* Choice of add on */}
        <View style={styles.addOnWrap}>
          <Text style={styles.addOnTitle}>Choice of Add On</Text>
          <FlatList
            data={ADDONS}
            keyExtractor={(i) => i.id}
            renderItem={renderAddon}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            scrollEnabled={false}
          />
        </View>

        {/* Add to cart */}
        <View style={styles.ctaWrap}>
          <TouchableOpacity activeOpacity={0.85} style={styles.ctaBtn}>
            <Ionicons name="cart" size={18} color="#FFFFFF" />
            <Text style={styles.ctaText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
