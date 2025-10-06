import Feather from "@expo/vector-icons/Feather";
import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/component_settings/settings.list.item.styles";

type SettingsListItemProps = {
  title: string;
  leading: ReactNode;
  onPress?: () => void;
};

export default function SettingsListItem({ title, leading, onPress }: SettingsListItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.row}>
      <View style={styles.left}>
        <View style={styles.leading}>{leading}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#9ca3af" />
    </TouchableOpacity>
  );
}


