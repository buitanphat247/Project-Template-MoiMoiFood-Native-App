import NotificationsHeader from "@/components/notifications/NotificationsHeader";
import NotificationsList from "@/components/notifications/NotificationsList";
import styles from "@/styles/screens_tabs/notifications.styles";
import React, { useMemo, useState } from "react";
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

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.screen}>
      <NotificationsHeader filter={filter as any} onChangeFilter={(f) => setFilter(f as any)} onMarkAllRead={markAllRead} />
      <NotificationsList
        data={filteredData as any}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onPressItem={(id) => setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))}
      />
    </SafeAreaView>
  );
}
