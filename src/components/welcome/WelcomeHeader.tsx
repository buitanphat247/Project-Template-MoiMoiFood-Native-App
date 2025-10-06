import styles from "@/styles/screens_root/index.styles";
import React from "react";
import { Text, View } from "react-native";

export default function WelcomeHeader() {
  return (
    <View style={styles.heroTextWrap}>
      <Text style={styles.heroWelcome}>Welcome to</Text>
      <Text style={styles.heroBrand}>MoiMoi Food</Text>
      <Text style={styles.heroSubtitle}>Your favourite foods delivered fast at your door.</Text>
    </View>
  );
}


