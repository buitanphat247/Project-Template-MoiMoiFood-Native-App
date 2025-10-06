import { AntDesign, Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const HeaderHome = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        elevation: 3,
      }}
    >
      {/* Menu hamburger bên trái */}
      {/* <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <AntDesign name="menu" size={24} color="black" />
      </TouchableOpacity> */}

      {/* Địa chỉ giao hàng ở giữa */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Text style={{ fontSize: 12, color: "#6B7280", fontWeight: "500" }}>
            Deliver to
          </Text>
          <AntDesign name="down" size={12} color="#6B7280" />
        </View>
        <Text
          style={{
            fontSize: 14,
            color: "#F97316",
            fontWeight: "600",
            marginTop: 2,
          }}
        >
          4102 Pretty View Lane
        </Text>
      </View>

      {/* Avatar bên phải */}
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <Link href="/(stack)/profile">
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: "#FEF3C7",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="user" size={24} color="black" />
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
};
export default HeaderHome;
