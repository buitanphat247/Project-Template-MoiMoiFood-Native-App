import MyButton from "@/components/MyButton";
import Feather from "@expo/vector-icons/Feather";
import React from "react";

type Props = {
  onPress: () => void;
};

export default function LogoutButton({ onPress }: Props) {
  return (
    <MyButton
      title="Log out"
      icon={<Feather name="log-out" size={18} color="#b91c1c" />}
      textColor="#b91c1c"
      style={{ backgroundColor: "#fee2e2", borderRadius: 10 }}
      onPress={onPress}
    />
  );
}


