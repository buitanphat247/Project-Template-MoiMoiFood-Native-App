import React from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/component_settings/settings.logout.modal.styles";

type LogoutConfirmModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function LogoutConfirmModal({ visible, onCancel, onConfirm }: LogoutConfirmModalProps) {
  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onCancel}>
      <Pressable style={styles.overlay} onPress={onCancel}>
        <Pressable onPress={() => {}} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Đăng xuất tài khoản?</Text>
            <Text style={styles.desc}>Bạn sẽ cần đăng nhập lại để tiếp tục sử dụng ứng dụng.</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <TouchableOpacity activeOpacity={0.8} onPress={onCancel} style={styles.btn}>
              <Text style={styles.cancelText}>Hủy</Text>
            </TouchableOpacity>
            <View style={styles.vDivider} />
            <TouchableOpacity activeOpacity={0.8} onPress={onConfirm} style={styles.btn}>
              <Text style={styles.confirmText}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}


