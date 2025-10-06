import Feather from "@expo/vector-icons/Feather";
import React, { useMemo, useState } from "react";
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type NotificationItem = {
  id: string;
  type: "promo" | "order" | "system";
  title: string;
  message: string;
  time: string;
  read?: boolean;
};
const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    type: "promo",
    title: "Giảm 50% đơn đầu tiên",
    message: "Nhập mã MOIMOI50 để nhận ưu đãi hấp dẫn.",
    time: "2 phút trước",
    read: false,
  },
  {
    id: "2",
    type: "order",
    title: "Đơn #A1234 đã được xác nhận",
    message: "Nhà hàng đang chuẩn bị món của bạn.",
    time: "10 phút trước",
  },
  {
    id: "3",
    type: "promo",
    title: "Miễn phí giao hàng cuối tuần",
    message: "Áp dụng cho đơn từ 99.000đ.",
    time: "Hôm nay, 09:30",
  },
  {
    id: "4",
    type: "system",
    title: "Cập nhật điều khoản dịch vụ",
    message: "Vui lòng đọc kỹ điều khoản mới nhất.",
    time: "Hôm qua",
  },
  {
    id: "5",
    type: "order",
    title: "Đơn #A1267 đang được giao",
    message: "Tài xế đang trên đường đến với bạn.",
    time: "Hôm nay, 11:45",
    read: false,
  },
  {
    id: "6",
    type: "promo",
    title: "Tặng 20.000đ cho đơn trên 150.000đ",
    message: "Sử dụng mã HAPPY20 trước 23:59 hôm nay!",
    time: "1 giờ trước",
  },
  {
    id: "7",
    type: "order",
    title: "Đơn #A1288 đã giao thành công",
    message: "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!",
    time: "5 giờ trước",
  },
  {
    id: "8",
    type: "system",
    title: "Bảo trì hệ thống",
    message: "Ứng dụng sẽ tạm ngưng hoạt động từ 01:00–02:00 sáng mai.",
    time: "3 ngày trước",
  },
  {
    id: "9",
    type: "promo",
    title: "Flash Sale 10.10",
    message: "Giảm đến 70% cho các món hot, chỉ hôm nay!",
    time: "Hôm nay, 10:10",
  },
  {
    id: "10",
    type: "system",
    title: "Chính sách bảo mật mới",
    message: "Cập nhật từ ngày 15/10/2025.",
    time: "Hôm qua, 17:20",
  },
  {
    id: "11",
    type: "order",
    title: "Đơn #A1300 đang được chuẩn bị",
    message: "Nhà hàng đã nhận đơn và đang chế biến.",
    time: "45 phút trước",
  },
  {
    id: "12",
    type: "promo",
    title: "Voucher sinh nhật dành riêng cho bạn 🎉",
    message: "Nhận ngay giảm 100.000đ khi đặt đơn từ 250.000đ.",
    time: "3 ngày trước",
  },
  {
    id: "13",
    type: "system",
    title: "Phiên bản mới 3.2.0 đã sẵn sàng",
    message: "Cập nhật ngay để trải nghiệm nhanh hơn và ổn định hơn.",
    time: "5 ngày trước",
  },
  {
    id: "14",
    type: "order",
    title: "Đơn #A1333 đã bị hủy",
    message: "Nhà hàng không thể chuẩn bị món ăn trong thời gian yêu cầu.",
    time: "2 ngày trước",
  },
  {
    id: "15",
    type: "promo",
    title: "Giảm 30% cho món yêu thích của bạn",
    message: "Áp dụng cho quán bạn từng đặt gần đây.",
    time: "6 giờ trước",
  },
];

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
  const [filter, setFilter] = useState<"all" | NotificationItem["type"]>("all");
  const [refreshing, setRefreshing] = useState(false);

  const filteredData = useMemo(() => {
    if (filter === "all") return notifications;
    return notifications.filter((n) => n.type === filter);
  }, [notifications, filter]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const renderIcon = (type: NotificationItem["type"]) => {
    if (type === "promo") return <Feather name="gift" size={20} color="#F97316" />;
    if (type === "order") return <Feather name="shopping-bag" size={20} color="#22C55E" />;
    return <Feather name="info" size={20} color="#3B82F6" />;
  };

  const renderItem = ({ item }: { item: NotificationItem }) => {
    const isUnread = item.read === false;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          backgroundColor: isUnread ? "#F8FAFC" : "#FFFFFF",
          borderBottomColor: "#E5E7EB",
          borderBottomWidth: 1,
          gap: 10,
        }}
        onPress={() => {
          setNotifications((prev) => prev.map((n) => (n.id === item.id ? { ...n, read: true } : n)));
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "#F1F5F9",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {renderIcon(item.type)}
          </View>
          <View style={{ flex: 1, gap: 4 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: isUnread ? "700" : "600",
                  color: "#111827",
                  flexShrink: 1,
                }}
                numberOfLines={1}
              >
                {item.title}
              </Text>
              {isUnread && <View style={{ width: 8, height: 8, backgroundColor: "#EF4444", borderRadius: 4 }} />}
            </View>
            <Text style={{ fontSize: 13, color: "#4B5563" }} numberOfLines={2}>
              {item.message}
            </Text>
            <Text style={{ fontSize: 12, color: "#9CA3AF" }}>{item.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const EmptyState = () => (
    <View style={{ alignItems: "center", justifyContent: "center", padding: 32, gap: 8 }}>
      <Feather name="bell-off" size={28} color="#9CA3AF" />
      <Text style={{ fontSize: 14, color: "#6B7280" }}>Không có thông báo nào</Text>
    </View>
  );

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 12, borderBottomColor: "#E5E7EB", borderBottomWidth: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#111827" }}>Thông báo</Text>
          <TouchableOpacity onPress={markAllRead} activeOpacity={0.7}>
            <Text style={{ color: "#3B82F6", fontWeight: "600" }}>Đã đọc hết</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 8, marginTop: 12 }}>
          {[
            { key: "all", label: "Tất cả" },
            { key: "promo", label: "Khuyến mãi" },
            { key: "order", label: "Đơn hàng" },
            { key: "system", label: "Hệ thống" },
          ].map((t) => {
            const isActive = (t.key as any) === filter;
            return (
              <TouchableOpacity
                key={t.key}
                onPress={() => setFilter(t.key as any)}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 999,
                  backgroundColor: isActive ? "#111827" : "#F3F4F6",
                }}
              >
                <Text style={{ color: isActive ? "#FFFFFF" : "#111827", fontWeight: "600", fontSize: 13 }}>{t.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyState />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
}
