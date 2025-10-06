import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LabelInput from "../../components/LabelInput";
import MyButton from "../../components/MyButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onLogin = () => {
    // TODO: hook up auth
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 0,
          paddingHorizontal: 20,
          backgroundColor: "#F8FAFC",
          flexGrow: 1,
          justifyContent: "space-around",
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* header spacing removed to vertically center */}
        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            color: "#0F172A",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Đăng Nhập Tài Khoản
        </Text>

        {/* form sign in */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          {/* email */}

          {/* LabelInput bọc sẵn label + MyInput */}
          <LabelInput
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholder="Your email or phone"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {/* Password dùng lại LabelInput, bật secureTextEntry */}
            <LabelInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={true}
              secureText={true}
            />

            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{ color: "#F97316", fontSize: 12, fontWeight: "600" }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* nút Login chính */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <MyButton
              title="Đăng Nhập Tài Khoản"
              onPress={onLogin}
              style={{ backgroundColor: "#F97316" }}
              textColor="#ffffff"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#6B7280" }}>Don't have an account?</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Link
                href="/(auth)/signup"
                style={{ color: "#F97316", fontWeight: "600" }}
              >
                {" "}
                Sign Up
              </Link>
            </TouchableOpacity>
          </View>
        </View>

        {/* config button section sign in  */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 28,
              paddingHorizontal: 4,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#E5E7EB" }} />
            <Text style={{ color: "#6B7280", fontSize: 12 }}>Sign in with</Text>
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

          {/* back button ở cuối trang */}
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
