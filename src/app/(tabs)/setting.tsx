import MyButton from "@/components/MyButton";
import LogoutConfirmModal from "@/components/settings/LogoutConfirmModal";
import SettingsListItem from "@/components/settings/SettingsListItem";
import styles from "@/styles/screens_tabs/setting.styles";
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
    <View style={styles.screen}>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.screen}>
        <ScrollView>
          <Text style={styles.header}>
            Settings
          </Text>

          <View style={styles.profileCard}>
            <Image source={{ uri: "https://i.pravatar.cc/100?img=12" }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Nguyen Van A</Text>
              <Text style={styles.email}>nguyenvana@example.com</Text>
            </View>
            <Link href="/(stack)/profile" asChild>
              <TouchableOpacity activeOpacity={0.8} style={styles.editBtn}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.sections}>
            {/* config general */}
            <View>
              <Text style={styles.sectionTitle}>
                General
              </Text>
              <View style={styles.sectionBlock}>
                {items.map((item) => (
                  <SettingsListItem key={item.id} title={item.title} leading={ICONS[item.icon]} />
                ))}
              </View>
            </View>

            {/* config help */}
            <View>
              <Text style={[styles.sectionTitle, { marginTop: 12 }]}>
                Help
              </Text>
              <View style={styles.sectionBlock}>
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
