import OverviewProductCard from "@/components/products/OverviewProductCard";
import React from "react";
import { FlatList } from "react-native";

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

type OverviewProductListProps = {
  data: Product[];
  contentContainerStyle?: any;
  onToggleFavorite: (id: string) => void;
};

export default function OverviewProductList({ data, contentContainerStyle, onToggleFavorite }: OverviewProductListProps) {
  const renderItem = ({ item }: { item: Product }) => (
    <OverviewProductCard item={item} onToggleFavorite={onToggleFavorite} />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={contentContainerStyle}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}


