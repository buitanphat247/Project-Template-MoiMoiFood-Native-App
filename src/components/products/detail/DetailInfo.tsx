import styles from "@/styles/screens_home/detail.product.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type DetailInfoProps = {
  title: string;
  rating: number;
  reviewsLabel?: string;
  price: string;
  qty: number;
  onInc: () => void;
  onDec: () => void;
};

export default function DetailInfo({ title, rating, reviewsLabel = "(30+)", price, qty, onInc, onDec }: DetailInfoProps) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ratingRow}>
        <Ionicons name="star" size={14} color="#F59E0B" />
        <Text style={{ fontWeight: "700", color: "#111827" }}>{rating.toFixed(1)}</Text>
        <Text style={{ color: "#6B7280" }}>{reviewsLabel}</Text>
        <TouchableOpacity>
          <Text style={{ color: "#3B82F6", marginLeft: 6 }}>See Review</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.qtyRow}>
          <TouchableOpacity onPress={onDec} style={styles.qtyBtnMinus}>
            <Ionicons name="remove" size={16} color="#111827" />
          </TouchableOpacity>
          <Text style={{ width: 24, textAlign: "center", fontWeight: "700", color: "#111827" }}>{qty.toString().padStart(2, "0")}</Text>
          <TouchableOpacity onPress={onInc} style={styles.qtyBtnPlus}>
            <Ionicons name="add" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.desc}>
        Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder.
      </Text>
    </View>
  );
}


