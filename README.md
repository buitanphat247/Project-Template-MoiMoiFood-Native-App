# Moi Moi Food – React Native Expo Template

Moi Moi Food là template ứng dụng giao đồ ăn (food delivery) được thiết kế tối giản, có thể dùng làm nền tảng khởi tạo nhanh dự án mới. Template tập trung vào trải nghiệm duyệt nhà hàng/món ăn, đặt hàng cơ bản và màn hình tài khoản/thiết lập. Kiến trúc dựa trên `expo-router`, style linh hoạt (inline + NativeWind/Tailwind) và component hóa theo domain giúp dễ mở rộng.

## Tính năng chính (Template)
- Trang chủ với danh mục, banner, tìm kiếm, và danh sách nhà hàng/sản phẩm.
- Card nhà hàng đẹp mắt: ảnh, đánh giá, danh mục, yêu thích.
- Carousel ngang dùng FlatList hiển thị tới 20 mục mỗi nhóm.
- Màn hình Settings có header hồ sơ, nhóm General/Preferences/Help, công tắc Notifications/Dark Mode, banner refer và nút Logout.
- Điều hướng đa tầng: `(tabs)`, `(stack)`, `(auth)` nhờ `expo-router`.

## Mục tiêu template
- Khởi tạo nhanh dự án food delivery mang thương hiệu riêng.
- Cung cấp cấu trúc thư mục, mẫu UI và component có sẵn để tái sử dụng.
- Dễ tùy biến: thay màu sắc, font, icon, dữ liệu mock → API thật.

## Tech stack
- Expo SDK 54, React Native 0.81, React 19.
- `expo-router`, `@react-navigation/*` (screens), `react-native-safe-area-context`.
- UI: `@expo/vector-icons`, NativeWind/Tailwind (tùy file), inline style khi phù hợp.

## Cài đặt & chạy
1) Cài dependencies:
```bash
npm install
```
2) Chạy dự án:
```bash
npx expo start
```
Sau khi khởi động, chọn một trong các tùy chọn: Android Emulator, iOS Simulator, hoặc Expo Go.

## Cấu trúc thư mục rút gọn
- `src/app/` – routing theo thư mục (`(tabs)`, `(stack)`, `(auth)`) và các màn hình chính.
- `src/components/` – component chia theo domain (`home`, `products`, ...).
- `assets/` – hình ảnh, icon.
- `global.css`, `tailwind.config.js` – cấu hình style.

## Quy ước code
- TypeScript, module theo tính năng, component nhỏ gọn, dễ tái sử dụng.
- Ưu tiên inline style cho màn hình đơn giản; dùng Tailwind/NativeWind khi cần tốc độ.
- Lint theo `eslint-config-expo`; giữ code sạch, không cảnh báo.

## Lệnh hữu ích
```bash
npm run android   # mở Android
npm run ios       # mở iOS
npm run web       # chạy trên web
npm run lint      # kiểm tra lint
```

## Ghi chú học tập
- Thay nội dung dữ liệu giả ở `src/components/**` bằng API thật khi sẵn sàng.
- Thêm điều hướng `onPress` cho từng mục Settings theo nhu cầu ứng dụng.

---
Hỗ trợ thêm: vui lòng mở issue hoặc liên hệ trong lớp học/nhóm Zalo/Discord của khoá học.