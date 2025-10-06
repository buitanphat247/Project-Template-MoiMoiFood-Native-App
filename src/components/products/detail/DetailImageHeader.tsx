import styles from "@/styles/screens_home/detail.product.styles";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

type DetailImageHeaderProps = {
  onBack: () => void;
};

export default function DetailImageHeader({ onBack }: DetailImageHeaderProps) {
  return (
    <View style={styles.imageWrap}>
      <View style={styles.imageBox}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop" }}
          style={styles.hero}
        />
        <TouchableOpacity onPress={onBack} activeOpacity={0.8} style={styles.backBtn}>
          <Feather name="chevron-left" size={18} color="#111827" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.heartBtn}>
          <Ionicons name="heart-outline" size={18} color="#111827" />
        </TouchableOpacity>
      </View>
    </View>
  );
}


