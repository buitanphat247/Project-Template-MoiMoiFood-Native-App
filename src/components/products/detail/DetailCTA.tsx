import styles from "@/styles/screens_home/detail.product.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type DetailCTAProps = {
  onAddToCart: () => void;
};

export default function DetailCTA({ onAddToCart }: DetailCTAProps) {
  return (
    <View style={styles.ctaWrap}>
      <TouchableOpacity activeOpacity={0.85} style={styles.ctaBtn} onPress={onAddToCart}>
        <Ionicons name="cart" size={18} color="#FFFFFF" />
        <Text style={styles.ctaText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}


