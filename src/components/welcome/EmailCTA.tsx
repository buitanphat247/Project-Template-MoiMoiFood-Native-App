import styles from "@/styles/screens_root/index.styles";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function EmailCTA({ onPress }: Props) {
  return (
    <View style={styles.emailBtnBox}>
      <Pressable style={styles.emailPressable} onPress={onPress}>
        <Text style={styles.emailText}>Start with your email</Text>
      </Pressable>
    </View>
  );
}


