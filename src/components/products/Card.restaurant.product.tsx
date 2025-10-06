import { Text, View } from "react-native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import RestaurantCategories from "./RestaurantCategories";
import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";
import { Link } from "expo-router";

interface RestaurantCardProps {
  restaurant: {
    id: string;
    name: string;
    imageUrl: string;
    rating: number;
    reviewCount: number;
    isVerified?: boolean;
    isFavorite?: boolean;
    deliveryInfo: {
      isFreeDelivery: boolean;
      deliveryTime: string;
    };
    categories: string[];
  };
  onPress?: () => void;
  onFavoritePress?: () => void;
  style?: any;
}

const CardRestaurantProduct = ({
  restaurant,
  onPress,
  onFavoritePress,
  style,
}: RestaurantCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Link href={`/detail.product`}>
        <RestaurantImage
          imageUrl={restaurant.imageUrl}
          rating={restaurant.rating}
          reviewCount={restaurant.reviewCount}
          isFavorite={restaurant.isFavorite}
          onFavoritePress={onFavoritePress}
        />

        <RestaurantInfo
          name={restaurant.name}
          isVerified={restaurant.isVerified}
          deliveryInfo={restaurant.deliveryInfo}
        />

        <RestaurantCategories categories={restaurant.categories} />
      </Link>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});

export default CardRestaurantProduct;
