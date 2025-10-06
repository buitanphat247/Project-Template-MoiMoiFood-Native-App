import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useMemo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import type { MyInputProps } from "../interface/MyInputInterface";

export default function MyInput({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  errorText,
  editable,
  style,
  secureText,
  ...rest
}: MyInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHidden, setIsHidden] = useState<boolean>(secureText ?? false);
  const isPassword = useMemo(
    () => (secureText ?? false) || secureTextEntry,
    [secureText, secureTextEntry]
  );
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          height: 50,
          borderRadius: 12,
          paddingHorizontal: 16,
          backgroundColor: "#ffffff",
          borderWidth: 1,
          borderColor: "#E5E7EB",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.06,
          shadowRadius: 4,
          elevation: 2,
          ...(editable === false && { opacity: 0.6 }),
          ...(isFocused && { borderColor: "#F97316", shadowColor: "#F97316" }),
        }}
      >
        <TextInput
          style={[
            {
              flex: 1,
              color: "#111827",
              fontSize: 16,
            },
            style,
          ]}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword ? isHidden : false}
          keyboardType={keyboardType}
          editable={editable}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        {isPassword && (
          <Pressable onPress={() => setIsHidden((prev) => !prev)} hitSlop={8}>
            <Text style={{ color: "#6B7280", fontSize: 12 }}>
              {isHidden ? (
                <AntDesign name="eye-invisible" size={24} color="black" />
              ) : (
                <AntDesign name="eye" size={24} color="black" />
              )}
            </Text>
          </Pressable>
        )}
      </View>
      {!!errorText && (
        <Text
          style={{
            marginTop: 6,
            color: "#ef4444",
            fontSize: 12,
          }}
        >
          {errorText}
        </Text>
      )}
    </View>
  );
}

