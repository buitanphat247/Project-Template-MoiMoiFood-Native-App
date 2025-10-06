import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Constants from "expo-constants";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
      <SafeAreaView>
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
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#111827" }}
              >
                Nguyen Van A
              </Text>
              <Text style={{ color: "#6b7280", marginTop: 2 }}>
                nguyenvana@example.com
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 8,
                backgroundColor: "#e5e7eb",
              }}
            >
              <Text style={{ color: "#111827", fontWeight: "600" }}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingHorizontal: 16,
              display: "flex",
              flexDirection: "column",
              gap: 20,
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

              <View
                style={{
                  backgroundColor: "#ffffff",
                }}
              >
                {items.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.7}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 6,
                          backgroundColor: "#f3f4f6",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 12,
                        }}
                      >
                        {ICONS[item.icon]}
                      </View>
                      <Text style={{ fontSize: 16, color: "#111827" }}>
                        {item.title}
                      </Text>
                    </View>
                    <Feather name="chevron-right" size={20} color="#9ca3af" />
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.7}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 10,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 6,
                          backgroundColor: "#f3f4f6",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 12,
                        }}
                      >
                        {ICONS[item.icon]}
                      </View>
                      <Text style={{ fontSize: 16, color: "#111827" }}>
                        {item.title}
                      </Text>
                    </View>
                    <Feather name="chevron-right" size={20} color="#9ca3af" />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* config module logout */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 14,
                  borderRadius: 10,
                  backgroundColor: "#e0e7ff",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      backgroundColor: "#dbeafe",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                    }}
                  >
                    <FontAwesome5
                      name="user-friends"
                      size={18}
                      color="#1d4ed8"
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#1d4ed8",
                      fontWeight: "600",
                    }}
                  >
                    Refer Friends, Get ₹150
                  </Text>
                </View>
                <Feather name="chevron-right" size={20} color="#1d4ed8" />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.85}
                style={{
                  paddingVertical: 14,
                  borderRadius: 10,
                  backgroundColor: "#fee2e2",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#b91c1c", fontWeight: "700", fontSize: 16 }}
                >
                  Log out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
