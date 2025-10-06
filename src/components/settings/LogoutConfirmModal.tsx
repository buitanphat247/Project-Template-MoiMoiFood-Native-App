import React from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

type LogoutConfirmModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function LogoutConfirmModal({ visible, onCancel, onConfirm }: LogoutConfirmModalProps) {
  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onCancel}>
      <Pressable style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)", padding: 24, justifyContent: "center" }} onPress={onCancel}>
        <Pressable
          onPress={() => {}}
          style={{ backgroundColor: "#ffffff", borderRadius: 16, overflow: "hidden" }}
        >
          <View style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 4 }}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#111827" }}>Đăng xuất tài khoản?</Text>
            <Text style={{ marginTop: 8, color: "#4b5563" }}>
              Bạn sẽ cần đăng nhập lại để tiếp tục sử dụng ứng dụng.
            </Text>
          </View>

          <View style={{ height: 1, backgroundColor: "#E5E7EB", marginTop: 12 }} />

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity activeOpacity={0.8} onPress={onCancel} style={{ flex: 1, paddingVertical: 14, alignItems: "center" }}>
              <Text style={{ fontWeight: "700", color: "#111827" }}>Hủy</Text>
            </TouchableOpacity>
            <View style={{ width: 1, backgroundColor: "#E5E7EB" }} />
            <TouchableOpacity activeOpacity={0.8} onPress={onConfirm} style={{ flex: 1, paddingVertical: 14, alignItems: "center" }}>
              <Text style={{ fontWeight: "700", color: "#DC2626" }}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}


