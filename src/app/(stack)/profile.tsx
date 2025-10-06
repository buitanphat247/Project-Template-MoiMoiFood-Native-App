import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const menuItems = [
    {
      id: 1,
      title: "Đơn hàng của tôi",
      icon: "receipt",
      iconType: "MaterialIcons",
      color: "#FF6B6B",
    },
    {
      id: 2,
      title: "Địa chỉ giao hàng",
      icon: "location-outline",
      iconType: "Ionicons",
      color: "#4CAF50",
    },
    {
      id: 3,
      title: "Phương thức thanh toán",
      icon: "credit-card",
      iconType: "Feather",
      color: "#2196F3",
    },
    {
      id: 4,
      title: "Mã giảm giá",
      icon: "tag",
      iconType: "Feather",
      color: "#FF9800",
    },
    {
      id: 5,
      title: "Thông báo",
      icon: "bell",
      iconType: "Feather",
      color: "#9C27B0",
    },
    {
      id: 6,
      title: "Trợ giúp & Hỗ trợ",
      icon: "help-circle",
      iconType: "Feather",
      color: "#607D8B",
    },
    {
      id: 7,
      title: "Về chúng tôi",
      icon: "info",
      iconType: "Feather",
      color: "#795548",
    },
    // {
    //   id: 8,
    //   title: "Đăng xuất",
    //   icon: "log-out",
    //   iconType: "Feather",
    //   color: "#F44336",
    // },
  ];

  const renderIcon = (iconType: string, iconName: string, color: string) => {
    switch (iconType) {
      case "AntDesign":
        return <AntDesign name={iconName as any} size={24} color={color} />;
      case "Ionicons":
        return <Ionicons name={iconName as any} size={24} color={color} />;
      case "Feather":
        return <Feather name={iconName as any} size={24} color={color} />;
      default:
        return <Feather name="help-circle" size={24} color={color} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <AntDesign name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tài khoản</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Feather name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Bùi Tấn Phát</Text>
          <Text style={styles.userEmail}>tan270407@email.com</Text>
          <Text style={styles.userPhone}>+84 984 380 205</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>{renderIcon(item.iconType, item.icon, item.color)}</View>
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              <AntDesign name="right" size={16} color="#C4C4C4" />
            </TouchableOpacity>
          ))}
        </View>

        {/* App Version */}
        <View style={styles.versionSection}>
          <Text style={styles.versionText}>Phiên bản 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 30,
    marginBottom: 20,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#FF6B6B",
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FF6B6B",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },
  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  userPhone: {
    fontSize: 16,
    color: "#666",
  },
  menuSection: {
    backgroundColor: "#fff",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  versionSection: {
    paddingTop: 10,
    alignItems: "center",
  },
  versionText: {
    fontSize: 14,
    color: "#999",
  },
});

export default ProfileScreen;
