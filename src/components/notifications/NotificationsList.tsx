import React from "react";
import { FlatList, RefreshControl } from "react-native";
import NotificationItemRow, { NotificationItem } from "./NotificationItemRow";
import NotificationsEmptyState from "./NotificationsEmptyState";

type Props = {
  data: NotificationItem[];
  refreshing: boolean;
  onRefresh: () => void;
  onPressItem: (id: string) => void;
};

export default function NotificationsList({ data, refreshing, onRefresh, onPressItem }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <NotificationItemRow item={item} onPress={onPressItem} />}
      ListEmptyComponent={<NotificationsEmptyState />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
}


