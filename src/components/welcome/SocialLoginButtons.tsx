import MyButton from "@/components/MyButton";
import styles from "@/styles/screens_root/index.styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, View } from "react-native";

export default function SocialLoginButtons() {
  return (
    <View style={styles.socialWrap}>
      <View style={styles.socialDividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>Sign in with</Text>
        <View style={styles.dividerLine} />
      </View>
      <View style={styles.socialButtonsRow}>
        <View style={styles.socialBtnBox}>
          <MyButton title="FACEBOOK" onPress={() => console.log("Facebook pressed")} icon={<FontAwesome name="facebook-f" size={16} color="#1877F2" />} />
        </View>
        <View style={styles.socialBtnBox}>
          <MyButton title="GOOGLE" onPress={() => console.log("Google pressed")} icon={<AntDesign name="google" size={16} color="#DB4437" />} />
        </View>
      </View>
    </View>
  );
}


