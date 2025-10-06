import React from "react";
import { Pressable, Text, View } from "react-native";
import { MyButtonProps } from "../interface/MyButtonInterface";

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
      <View
        style={[
          {
            backgroundColor: "#ffffff",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
           
            gap: 10,
            height: 50,
          },
          style,
        ]}
      >
        {icon}
        {title && (
          <Text
            style={[
              {
                color: "black",
                fontSize: 16,
                fontWeight: "600",
                textAlign: "center",
              },
              textColor && { color: textColor },
            ]}
          >
            {title}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
