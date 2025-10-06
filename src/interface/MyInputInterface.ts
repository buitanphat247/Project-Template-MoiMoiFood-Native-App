import type { TextInputProps } from "react-native";

export interface MyInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  errorText?: string;
  // Bật toggle mắt để ẩn/hiện (ưu tiên hơn secureTextEntry mặc định)
  secureText?: boolean;
}

