import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/component_products/overview.product.card.styles";

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
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
        <View style={styles.price}><Text style={styles.priceText}>{item.price}</Text></View>
        <TouchableOpacity onPress={() => onToggleFavorite(item.id)} style={styles.favBtn}>
          <Ionicons name={item.favorite ? "heart" : "heart-outline"} size={20} color={item.favorite ? "#ef4444" : "#111827"} />
        </TouchableOpacity>
        <View style={styles.ratingRowWrap}>
          <View style={styles.ratingRow}>
            <Text style={styles.priceText}>{item.rating.toFixed(1)}</Text>
            <Ionicons name="star" size={14} color="#F59E0B" />
            <Text style={{ color: "#6B7280" }}>({item.reviews}+)</Text>
          </View>
        </View>
      </View>
      <View style={styles.nameWrap}>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>{item.desc}</Text>
      </View>
    </View>
  );
}


