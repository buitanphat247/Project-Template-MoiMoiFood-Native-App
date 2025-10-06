import React from "react";
import { Pressable, Text, View } from "react-native";
import { MyButtonProps } from "../interface/MyButtonInterface";
import styles from "../styles/component_common/my.button.styles";

export default function MyButton({
  title,
  onPress,
  icon,
  style,
  textColor,
}: MyButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.8 }}
    >
      <View style={[styles.container, style]}>
        {icon}
        {title && (
          <Text
            style={[styles.text, textColor && { color: textColor }]}
          >
            {title}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
