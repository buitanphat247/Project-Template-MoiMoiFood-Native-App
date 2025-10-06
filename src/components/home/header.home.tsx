import { AntDesign, Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/component_homes/header.home.styles";

const HeaderHome = () => {
  return (
    <View style={styles.container}>
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
      <View style={styles.center}>
        <View style={styles.addressRow}>
          <Text style={styles.addressHint}>Deliver to</Text>
          <AntDesign name="down" size={12} color="#6B7280" />
        </View>
        <Text style={styles.addressText}>4102 Pretty View Lane</Text>
      </View>

      {/* Avatar bên phải */}
      <TouchableOpacity style={styles.avatarBtn}>
        <Link href="/(stack)/profile">
          <View style={styles.avatar}>
            <Feather name="user" size={24} color="black" />
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
};
export default HeaderHome;
