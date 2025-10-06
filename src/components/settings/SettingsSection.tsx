import styles from "@/styles/screens_tabs/setting.styles";
import React from "react";
import { Text, View } from "react-native";
import SettingsListItem from "./SettingsListItem";

type Item = { id: string; title: string; leading: React.ReactElement };

type Props = {
  title: string;
  items: Item[];
  titleMarginTop?: number;
};

export default function SettingsSection({ title, items, titleMarginTop = 0 }: Props) {
  return (
    <View>
      <Text style={[styles.sectionTitle, titleMarginTop ? { marginTop: titleMarginTop } : null]}>{title}</Text>
      <View style={styles.sectionBlock}>
        {items.map((item) => (
          <SettingsListItem key={item.id} title={item.title} leading={item.leading} />
        ))}
      </View>
    </View>
  );
}


