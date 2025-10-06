import styles from '@/styles/screens_tabs/orders.styles';
import React from 'react';
import { Text, View } from 'react-native';

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đơn hàng</Text>
      <Text style={styles.subtitle}>Danh sách đơn hàng của bạn</Text>
    </View>
  );
}
