import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../styles/component_products/overview.header.styles";

type OverviewHeaderProps = {
  onBack: () => void;
  query: string;
  onChangeQuery: (text: string) => void;
};

export default function OverviewHeader({ onBack, query, onChangeQuery }: OverviewHeaderProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.8} style={styles.backBtn}>
          <Feather name="chevron-left" size={20} color="#111827" />
        </TouchableOpacity>
        <View style={styles.inputWrap}>
          <Feather name="search" size={18} color="#6B7280" />
          <TextInput value={query} onChangeText={onChangeQuery} placeholder="Tìm món ăn..." placeholderTextColor="#9CA3AF" style={styles.input} />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.filterBtn}>
          <Feather name="sliders" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
