import LogoutButton from "@/components/settings/LogoutButton";
import LogoutConfirmModal from "@/components/settings/LogoutConfirmModal";
import ProfileCard from "@/components/settings/ProfileCard";
import SettingsHeader from "@/components/settings/SettingsHeader";
import SettingsSection from "@/components/settings/SettingsSection";
import styles from "@/styles/screens_tabs/setting.styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SettingItem = {
  id: string;
  title: string;
  icon: keyof typeof ICONS;
};

const ICONS = {
  payment: <FontAwesome5 name="money-check-alt" size={18} color="#1f2937" />,
  wallet: <FontAwesome5 name="wallet" size={18} color="#1f2937" />,
  saved: <FontAwesome5 name="bookmark" size={18} color="#1f2937" />,
  orders: <FontAwesome5 name="receipt" size={18} color="#1f2937" />,
  bookings: <FontAwesome5 name="bars" size={18} color="#1f2937" />,
  rewards: <FontAwesome5 name="gift" size={18} color="#1f2937" />,
  giftcard: <FontAwesome5 name="credit-card" size={18} color="#1f2937" />,
} as const;

export default function SettingScreen() {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const items: SettingItem[] = [
    { id: "payment", title: "Payment", icon: "payment" },
    { id: "wallet", title: "Living Menu Wallet", icon: "wallet" },
    { id: "saved", title: "Saved Items", icon: "saved" },
    { id: "orders", title: "Orders", icon: "orders" },
    { id: "bookings", title: "Bookings", icon: "bookings" },
    { id: "rewards", title: "Rewards", icon: "rewards" },
    { id: "giftcard", title: "Gift Card", icon: "giftcard" },
  ];

  const helpItems: SettingItem[] = [
    { id: "help", title: "Help & Support", icon: "saved" },
    { id: "privacy", title: "Privacy Policy", icon: "giftcard" },
    { id: "terms", title: "Terms of Service", icon: "orders" },
  ];

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <View style={styles.screen}>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.screen}>
        <ScrollView>
          <SettingsHeader />

          <ProfileCard name="Nguyen Van A" email="nguyenvana@example.com" avatarUrl="https://i.pravatar.cc/100?img=12" />

          <View style={styles.sections}>
            {/* config general */}
            <SettingsSection title="General" items={items.map((i) => ({ id: i.id, title: i.title, leading: ICONS[i.icon] }))} />

            {/* config help */}
            <SettingsSection title="Help" titleMarginTop={12} items={helpItems.map((i) => ({ id: i.id, title: i.title, leading: ICONS[i.icon] }))} />

            {/* config module logout */}

            <LogoutButton
              onPress={() => {
                return Alert.alert("Log out", "Bạn có chắc chắn muốn đăng xuất không?", [
                  { text: "Hủy", style: "cancel" },
                  {
                    text: "Đăng xuất",
                    style: "destructive",
                    onPress: () => {
                      setLogoutVisible(true);
                    },
                  },
                ]);
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>

      <LogoutConfirmModal
        visible={logoutVisible}
        onCancel={() => setLogoutVisible(false)}
        onConfirm={() => {
          setLogoutVisible(false);
          console.log("Log out");
        }}
      />
    </View>
  );
}
