import type React from "react";
import type { StyleProp, ViewStyle } from "react-native";

interface MyButtonProps {
  title?: string;
  onPress: () => void;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
}
export { MyButtonProps };

