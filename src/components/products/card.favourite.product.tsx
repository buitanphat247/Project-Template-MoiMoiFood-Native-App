import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

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
    <View
      style={[
        {
          backgroundColor: "#fff",
          borderRadius: 18,
          overflow: "hidden",
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
          elevation: 3,
        },
        style,
      ]}
    >
      {/* ✅ Toàn bộ card có thể nhấn */}
      <Link href={`/(tabs)/(home)/detail.product`} asChild>
        <Pressable style={{ position: "relative" }}>
          {/* Ảnh sản phẩm */}
          <Image source={{ uri: product.imageUrl }} style={{ width: "100%", height: 170 }} resizeMode="cover" />

          {/* Giá */}
          <View
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              backgroundColor: "#fff",
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 999,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "800", color: "#111827" }}>{product.price}</Text>
          </View>

          {/* Icon yêu thích ❤️ */}
          <TouchableOpacity
            onPress={() => onToggleFavourite?.(product.id)}
            activeOpacity={0.8}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <Ionicons name={product.favorite ? "heart" : "heart-outline"} size={20} color={product.favorite ? "#ef4444" : "#111827"} />
          </TouchableOpacity>

         

          {/* Thông tin */}
          <View
            style={{
              paddingHorizontal: 16,
              paddingTop: 12,
              paddingBottom: 14,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "800",
                color: "#111827",
              }}
              numberOfLines={1}
            >
              {product.name}
            </Text>
            {!!product.desc && (
              <Text
                style={{
                  marginTop: 6,
                  color: "#6B7280",
                }}
                numberOfLines={2}
              >
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
