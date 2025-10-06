// Component hiển thị label kèm ô nhập, tái sử dụng MyInput bên dưới
import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/component_common/label.input.styles'
// Kiểu props gốc của MyInput để kế thừa lại toàn bộ prop cho ô nhập
import type { MyInputProps } from '../interface/MyInputInterface'
import MyInput from './MyInput'

// LabelInput nhận thêm 'label' + toàn bộ prop của MyInput
type LabelInputProps = { label: string } & MyInputProps

// Destructure: lấy label; phần còn lại gom vào inputProps truyền xuống MyInput
export default function LabelInput({ label, ...inputProps }: LabelInputProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <MyInput {...inputProps} />
    </View>
  )
}