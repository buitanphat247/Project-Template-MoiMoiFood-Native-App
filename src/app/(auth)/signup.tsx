// Icons & navigation
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Link, useRouter } from "expo-router";
// React & form
import React from "react";
import { Controller, useForm } from "react-hook-form";
// UI primitives
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Local components
import LabelInput from "../../components/LabelInput";
import MyButton from "../../components/MyButton";

// Kiểu dữ liệu của form đăng ký
type SignupForm = {
  fullName: string;
  email: string;
  password: string;
};

export default function Signup() {
  const router = useRouter();
  // Khởi tạo react-hook-form với giá trị mặc định rỗng
  const { control, handleSubmit } = useForm<SignupForm>({
    defaultValues: { fullName: "", email: "", password: "" },
    mode: "onChange",
  });

  // Submit handler: sau này thay bằng gọi API
  const onSignup = handleSubmit((data: SignupForm) => {
    const { email, fullName, password } = data;
    router.replace("/(tabs)");
  });

  return (
    // Safe area để tránh đè lên tai thỏ/thanh trạng thái
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 0,
          paddingHorizontal: 20,
          backgroundColor: "#F8FAFC",
          flexGrow: 1,
          justifyContent: "space-around", // dàn đều phần trên (form) và dưới (social)
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Tiêu đề trang */}
        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            color: "#0F172A",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Đăng Ký Tài Khoản
        </Text>

        {/* Khối form các ô nhập */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <View style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Full name: Controller gắn value/onChange của form vào LabelInput */}
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => (
                <LabelInput
                  label="Full name"
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholder="Your full name"
                />
              )}
            />

            {/* Email */}
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <LabelInput
                  label="E-mail"
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholder="Your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              )}
            />

            {/* Password: bật secureText để có icon mắt trong MyInput */}
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <LabelInput
                  label="Password"
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholder="Password"
                  secureText={true}
                />
              )}
            />

            <View style={{ marginTop: 6 }}>
              <MyButton
                title="SIGN UP"
                onPress={onSignup}
                style={{ backgroundColor: "#F97316" }}
                textColor="#ffffff"
              />
            </View>
          </View>
        </View>
        {/* Link chuyển qua Login */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#6B7280" }}>Already have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/(auth)/login")}
          >
            <Text style={{ color: "#F97316", fontWeight: "600" }}> Login</Text>
          </TouchableOpacity>
        </View>
        {/* Khu social login + nút Back */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              paddingHorizontal: 4,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#E5E7EB" }} />
            <Text style={{ color: "#6B7280", fontSize: 12 }}>Sign up with</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#E5E7EB" }} />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
            }}
          >
            <View style={{ flex: 1 }}>
              <MyButton
                title="FACEBOOK"
                onPress={() => {}}
                icon={<EvilIcons name="sc-facebook" size={24} color="black" />}
                style={{ backgroundColor: "#ffffff", flex: 1, height: 50 }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <MyButton
                title="GOOGLE"
                onPress={() => {}}
                icon={<AntDesign name="google" size={24} color="black" />}
                style={{ backgroundColor: "#ffffff", flex: 1, height: 50 }}
              />
            </View>
          </View>

          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                height: 50,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                backgroundColor: "#ffffff",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              {/* <AntDesign name="left" size={16} color="#111827" /> */}
              <Link
                href="/"
                style={{
                  fontWeight: "600",
                  color: "#111827",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Back To Welcome
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
