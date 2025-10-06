import styles from "@/styles/screens_tabs/setting.styles";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  name: string;
  email: string;
  avatarUrl: string;
};

export default function ProfileCard({ name, email, avatarUrl }: Props) {
  return (
    <View style={styles.profileCard}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <Link href="/(stack)/profile" asChild>
        <TouchableOpacity activeOpacity={0.8} style={styles.editBtn}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}


