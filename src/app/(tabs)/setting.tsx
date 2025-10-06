import MyButton from "@/components/MyButton";
import LogoutConfirmModal from "@/components/settings/LogoutConfirmModal";
import SettingsListItem from "@/components/settings/SettingsListItem";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
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
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <ScrollView>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#111827",
              paddingHorizontal: 16,
              paddingBottom: 16,
            }}
          >
            Settings
          </Text>

          <View
            style={{
              borderWidth: 1,
              marginHorizontal: 12,
              marginBottom: 12,
              padding: 12,
              borderRadius: 12,
              backgroundColor: "#f9fafb",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: "https://i.pravatar.cc/100?img=12" }}
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                marginRight: 12,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#111827" }}>Nguyen Van A</Text>
              <Text style={{ color: "#6b7280", marginTop: 2 }}>nguyenvana@example.com</Text>
            </View>
            <Link href="/(stack)/profile" asChild>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 8,
                  backgroundColor: "#e5e7eb",
                }}
              >
                <Text style={{ color: "#111827", fontWeight: "600" }}>Edit</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View
            style={{
              paddingHorizontal: 16,
              display: "flex",
              flexDirection: "column",
              gap: 20,
              paddingBottom: 20,
            }}
          >
            {/* config general */}
            <View>
              <Text
                style={{
                  color: "#6b7280",
                  fontSize: 13,
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                General
              </Text>
              <View style={{ backgroundColor: "#ffffff" }}>
                {items.map((item) => (
                  <SettingsListItem key={item.id} title={item.title} leading={ICONS[item.icon]} />
                ))}
              </View>
            </View>

            {/* config help */}
            <View>
              <Text
                style={{
                  color: "#6b7280",
                  fontSize: 13,
                  fontWeight: "600",
                  textTransform: "uppercase",
                  marginTop: 12,
                }}
              >
                Help
              </Text>
              <View style={{ backgroundColor: "#ffffff" }}>
                {helpItems.map((item) => (
                  <SettingsListItem key={item.id} title={item.title} leading={ICONS[item.icon]} />
                ))}
              </View>
            </View>

            {/* config module logout */}

            <MyButton
              title="Log out"
              icon={<Feather name="log-out" size={18} color="#b91c1c" />}
              textColor="#b91c1c"
              style={{ backgroundColor: "#fee2e2", borderRadius: 10 }}
              onPress={() => setLogoutVisible(true)}
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
