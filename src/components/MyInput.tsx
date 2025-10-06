import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useMemo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import type { MyInputProps } from "../interface/MyInputInterface";
import styles from "../styles/component_common/my.input.styles";

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
    <View style={styles.wrapper}>
      <View style={[
        styles.container,
        editable === false && styles.disabled,
        isFocused && styles.focused,
      ]}>
        <TextInput
          style={[styles.input, style]}
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
            <Text style={styles.eyeText}>
              {isHidden ? (
                <AntDesign name="eye-invisible" size={24} color="black" />
              ) : (
                <AntDesign name="eye" size={24} color="black" />
              )}
            </Text>
          </Pressable>
        )}
      </View>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

