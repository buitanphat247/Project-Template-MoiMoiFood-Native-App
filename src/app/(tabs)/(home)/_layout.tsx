import { Stack } from "expo-router";

export default function HomeLayout() {
  // Chỉ định rõ màn mặc định là index
  return <Stack initialRouteName="index" screenOptions={{ headerShown: false }} />;
}
