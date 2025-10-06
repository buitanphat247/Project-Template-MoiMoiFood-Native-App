import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
      <Stack.Screen
        name="index"
        options={{ headerTitle: "WelcomePage ", headerShown: false }}
      />
      {/* <Stack.Screen name="(tabs)" options={{ headerTitle: "Home" }} />*/}
      <Stack.Screen
        name="(auth)/login"
        options={{ headerTitle: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/signup"
        options={{ headerTitle: "Signup", headerShown: false }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerTitle: "Trang chủ", headerShown: false }}
      />
      <Stack.Screen
        name="(stack)/profile"
        options={{ headerTitle: "Profile", headerShown: false }}
      />
      <Stack.Screen
        name="(stack)/detail.product"
        options={{ headerTitle: "Product Detail", headerShown: true }}
      />
      <Stack.Screen
        name="(stack)/overview.product"
        options={{ headerTitle: "Overview Product", headerShown: true }}
      />
      </Stack>
  );
}
