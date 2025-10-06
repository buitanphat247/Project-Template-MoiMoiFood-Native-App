import styles from "@/styles/screens_tabs/notifications.styles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type FilterKey = "all" | "promo" | "order" | "system";

type NotificationsHeaderProps = {
  filter: FilterKey;
  onChangeFilter: (f: FilterKey) => void;
  onMarkAllRead: () => void;
};

export default function NotificationsHeader({ filter, onChangeFilter, onMarkAllRead }: NotificationsHeaderProps) {
  const filters = [
    { key: "all", label: "Tất cả" },
    { key: "promo", label: "Khuyến mãi" },
    { key: "order", label: "Đơn hàng" },
    { key: "system", label: "Hệ thống" },
  ] as const;

  return (
    <View style={styles.topBar}>
      <View style={styles.topRow}>
        <Text style={styles.title}>Thông báo</Text>
        <TouchableOpacity onPress={onMarkAllRead} activeOpacity={0.7}>
          <Text style={styles.markAll}>Đã đọc hết</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filters}>
        {filters.map((t) => {
          const isActive = t.key === filter;
          return (
            <TouchableOpacity
              key={t.key}
              onPress={() => onChangeFilter(t.key)}
              style={[styles.filterChip, { backgroundColor: isActive ? "#111827" : "#F3F4F6" }]}
            >
              <Text style={{ color: isActive ? "#FFFFFF" : "#111827", fontWeight: "600", fontSize: 13 }}>{t.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}


