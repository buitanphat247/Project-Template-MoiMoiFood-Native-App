import styles from "@/styles/screens_tabs/orders.styles";
import Feather from "@expo/vector-icons/Feather";
import React, { useMemo, useState } from "react";
import { FlatList, Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type CartItem = { id: string; name: string; desc: string; price: number; qty: number; image: string };

const MOCK_CART: CartItem[] = [
  {
    id: "pizza",
    name: "Red n hot pizza",
    desc: "Spicy chicken, beef",
    price: 15.3,
    qty: 2,
    image: "https://d1hjkbq40fs2x4.cloudfront.net/2024-04-19/files/travel-food-photography-tips_2412-01.jpg",
  },
  {
    id: "salad",
    name: "Greek salad",
    desc: "with baked salmon",
    price: 12,
    qty: 2,
    image: "https://chuphinhmonan.com/wp-content/uploads/2017/03/avalon-1.jpg",
  },
  {
    id: "dessert",
    name: "Sweet Dessert",
    desc: "Tasty and colorful dessert",
    price: 8.5,
    qty: 1,
    image: "https://posapp.vn/wp-content/uploads/2022/03/hinh-anh-bat-mat-1024x682.jpg",
  },
  {
    id: "bbq",
    name: "BBQ Set",
    desc: "Korean style grilled meat",
    price: 20,
    qty: 1,
    image: "https://assets.tronhouse.vn/59185068-4c44-404a-a5b6-493d1d50d13d/origin/chup-anh-mon-an-4.jpeg",
  },
  {
    id: "noodles",
    name: "Asian noodles",
    desc: "Delicious dinner set",
    price: 10.5,
    qty: 3,
    image: "https://thietbiquayphim.com/wp-content/uploads/2022/05/meo-chup-anh-do-an-toi-dep.png",
  },
];

export default function OrdersScreen() {
  const [items, setItems] = useState<CartItem[]>(MOCK_CART);
  const [promo, setPromo] = useState("");

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);
  const tax = useMemo(() => +(subtotal * 0.194).toFixed(2), [subtotal]);
  const delivery = 1;
  const total = useMemo(() => +(subtotal + tax + delivery).toFixed(2), [subtotal, tax]);

  const inc = (id: string) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const dec = (id: string) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)));
  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const renderItem = ({ item }: { item: CartItem }) => (
    <View>
      <View style={styles.itemRow}>
        <Image source={{ uri: item.image }} style={styles.thumb} />
        <View style={styles.itemMain}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDesc}>{item.desc}</Text>
          <Text style={styles.itemPrice}>{`$${item.price.toFixed(2)}`}</Text>
        </View>
        <View style={styles.qtyWrap}>
          <View style={styles.qtyRow}>
            <TouchableOpacity style={[styles.qtyBtn, { backgroundColor: "#F3F4F6" }]} onPress={() => dec(item.id)}>
              <Feather name="minus" size={16} color="#111827" />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{item.qty.toString().padStart(2, "0")}</Text>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => inc(item.id)}>
              <Feather name="plus" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Pressable style={styles.removeBtn} onPress={() => remove(item.id)}>
            <Feather name="x" size={16} color="#EF4444" />
          </Pressable>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleWrap}>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>
      </View>

      {/* List */}
      <FlatList data={items} keyExtractor={(it) => it.id} renderItem={renderItem} contentContainerStyle={styles.listContent} />

      {/* Promo */}
      <View style={styles.promoWrap}>
        <TextInput placeholder="Promo Code" placeholderTextColor="#9CA3AF" value={promo} onChangeText={setPromo} style={styles.promoInput} />
        <TouchableOpacity style={styles.promoBtn}>
          <Text style={styles.promoBtnText}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Summary */}
      <View style={styles.summaryWrap}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>
            ${subtotal.toFixed(2)} <Text style={styles.currency}>USD</Text>
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax and Fees</Text>
          <Text style={styles.summaryValue}>
            ${tax.toFixed(2)} <Text style={styles.currency}>USD</Text>
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery</Text>
          <Text style={styles.summaryValue}>
            ${delivery.toFixed(2)} <Text style={styles.currency}>USD</Text>
          </Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLeft}>Total ({items.length} items)</Text>
          <Text style={styles.totalRight}>
            ${total.toFixed(2)} <Text style={styles.currency}>USD</Text>
          </Text>
        </View>
      </View>

      {/* Footer CTA */}
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.9} style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
