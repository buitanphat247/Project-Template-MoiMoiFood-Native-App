import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#2563EB" }, // màu nền header
        headerTintColor: "#fff", // màu chữ & icon
        headerTitleStyle: { fontWeight: "bold" }, // style của title
      }}
      initialRouteName="(tabs)"
    >
      <Stack.Screen name="index" options={{ headerTitle: "WelcomePage ", headerShown: false }} />
      <Stack.Screen name="(auth)/login" options={{ headerTitle: "Login", headerShown: false }} />
      <Stack.Screen name="(auth)/signup" options={{ headerTitle: "Signup", headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerTitle: "Trang chủ", headerShown: false }} />
      <Stack.Screen name="(stack)/profile" options={{ headerTitle: "Profile", headerShown: false }} />
   
      {/** Các màn con của Home được đăng ký trong (tabs)/(home)/_layout.tsx, không khai báo ở root */}
    </Stack>
  );
}
