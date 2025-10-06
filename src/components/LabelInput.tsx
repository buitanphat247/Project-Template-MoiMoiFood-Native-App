// Component hiển thị label kèm ô nhập, tái sử dụng MyInput bên dưới
import React from 'react'
import { Text, View } from 'react-native'
// Kiểu props gốc của MyInput để kế thừa lại toàn bộ prop cho ô nhập
import type { MyInputProps } from '../interface/MyInputInterface'
import MyInput from './MyInput'

// LabelInput nhận thêm 'label' + toàn bộ prop của MyInput
type LabelInputProps = { label: string } & MyInputProps

// Destructure: lấy label; phần còn lại gom vào inputProps truyền xuống MyInput
export default function LabelInput({ label, ...inputProps }: LabelInputProps) {
  return (
    // Bọc theo chiều rộng 100% để input chiếm trọn dòng
    <View style={{ width: '100%' }}>
      {/* Label hiển thị phía trên ô nhập */}
      <Text style={{ color: '#6B7280', marginBottom: 8, fontSize: 12 }}>{label}</Text>
      {/* Truyền toàn bộ prop còn lại xuống MyInput (value, onChangeText, ... ) */}
      <MyInput {...inputProps} />
    </View>
  )
}