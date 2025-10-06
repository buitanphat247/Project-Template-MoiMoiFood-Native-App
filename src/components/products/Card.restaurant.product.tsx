import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "../../styles/component_products/card.restaurant.product.styles";
import RestaurantCategories from "./RestaurantCategories";
import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";

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

const CardRestaurantProduct = ({ restaurant, onPress, onFavoritePress, style }: RestaurantCardProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.8}>
      <Link href={`/(tabs)/(home)/detail.product`}>
        <RestaurantImage
          imageUrl={restaurant.imageUrl}
          rating={restaurant.rating}
          reviewCount={restaurant.reviewCount}
          isFavorite={restaurant.isFavorite}
          onFavoritePress={onFavoritePress}
        />
        <RestaurantInfo name={restaurant.name} isVerified={restaurant.isVerified} deliveryInfo={restaurant.deliveryInfo} />
        <RestaurantCategories categories={restaurant.categories} />
      </Link>
    </TouchableOpacity>
  );
};

export default CardRestaurantProduct;
