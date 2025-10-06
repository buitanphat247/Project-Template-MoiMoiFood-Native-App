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
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 5,
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
