import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/component_products/card.favourite.product.styles";

type FavouriteProduct = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  rating: number;
  reviews: number;
  desc?: string;
  favorite?: boolean;
};

type CardFavouriteProductProps = {
  product: FavouriteProduct;
  style?: any;
  onToggleFavourite?: (id: string) => void;
};

const CardFavouriteProduct = ({ product, style, onToggleFavourite }: CardFavouriteProductProps) => {
  return (
    <View style={[styles.card, style]}>
      {/* ✅ Toàn bộ card có thể nhấn */}
      <Link href={`/(tabs)/(home)/detail.product`} asChild>
        <Pressable style={{ position: "relative" }}>
          {/* Ảnh sản phẩm */}
          <Image source={{ uri: product.imageUrl }} style={styles.image} resizeMode="cover" />

          {/* Giá */}
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>{product.price}</Text>
          </View>

          {/* Icon yêu thích ❤️ */}
          <TouchableOpacity onPress={() => onToggleFavourite?.(product.id)} activeOpacity={0.8} style={styles.favBtn}>
            <Ionicons name={product.favorite ? "heart" : "heart-outline"} size={20} color={product.favorite ? "#ef4444" : "#111827"} />
          </TouchableOpacity>

         

          {/* Thông tin */}
          <View style={styles.info}>
            <Text style={styles.name} numberOfLines={1}>
              {product.name}
            </Text>
            {!!product.desc && (
              <Text style={styles.desc} numberOfLines={2}>
                {product.desc}
              </Text>
            )}
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

export default CardFavouriteProduct;
