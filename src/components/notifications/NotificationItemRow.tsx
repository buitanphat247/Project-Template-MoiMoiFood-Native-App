import styles from "@/styles/screens_tabs/notifications.styles";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export type NotificationItem = {
  id: string;
  type: "promo" | "order" | "system";
  title: string;
  message: string;
  time: string;
  read?: boolean;
};

type Props = {
  item: NotificationItem;
  onPress: (id: string) => void;
};

export default function NotificationItemRow({ item, onPress }: Props) {
  const isUnread = item.read === false;

  const renderIcon = (type: NotificationItem["type"]) => {
    if (type === "promo") return <Feather name="gift" size={20} color="#F97316" />;
    if (type === "order") return <Feather name="shopping-bag" size={20} color="#22C55E" />;
    return <Feather name="info" size={20} color="#3B82F6" />;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.item, { backgroundColor: isUnread ? "#F8FAFC" : "#FFFFFF" }]}
      onPress={() => onPress(item.id)}
    >
      <View style={styles.itemRow}>
        <View style={styles.iconWrap}>{renderIcon(item.type)}</View>
        <View style={{ flex: 1, gap: 4 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text style={[styles.itemTitle, { fontWeight: isUnread ? "700" : "600" }]} numberOfLines={1}>
              {item.title}
            </Text>
            {isUnread && <View style={{ width: 8, height: 8, backgroundColor: "#EF4444", borderRadius: 4 }} />}
          </View>
          <Text style={styles.itemMsg} numberOfLines={2}>
            {item.message}
          </Text>
          <Text style={styles.itemTime}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}


