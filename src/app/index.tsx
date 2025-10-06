import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import MyButton from "../components/MyButton";

export default function WelcomePage() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/background-welcome.jpg")}
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
        imageStyle={{
          // bỏ opacity để tránh pha màu gây ám tím
          opacity: 1,
        }}
      >
        {/* Dark overlay - nửa dưới bằng LinearGradient */}
        <LinearGradient
          colors={["transparent", "rgb(0, 17, 73)"]}
          locations={[0, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "100%" }}
        />

        {/* Content */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 0,
          }}
        >
          {/* Welcome Text */}
          <View
            style={{
              marginBottom: 48,
            }}
          >
            <Text
              style={{
                fontSize: 36,
                fontWeight: "bold",
                color: "#374151",
                marginBottom: 8,
              }}
            >
              Welcome to
            </Text>
            <Text
              style={{
                fontSize: 48,
                fontWeight: "bold",
                color: "#F97316",
                marginBottom: 16,
              }}
            >
              MoiMoi Food
            </Text>
            <Text style={{ fontSize: 18, color: "#ffffff", lineHeight: 24 }}>
              Your favourite foods delivered fast at your door.
            </Text>
          </View>

          {/* Social Login Section */}
          <View
            style={{
              marginBottom: 32,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
              <Text
                style={{
                  marginHorizontal: 10,
                  color: "white",
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Sign in with
              </Text>
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
              }}
            >
              {/* Button facebook config login */}
              <View
                style={{
                  height: 50, // chiều cao (nếu muốn)

                  flex: 1,
                }}
              >
                <MyButton
                  title="FACEBOOK"
                  onPress={() => console.log("Facebook pressed")}
                  icon={
                    <FontAwesome name="facebook-f" size={16} color="#1877F2" />
                  }
                />
              </View>
              {/* Button email config login */}
              <View
                style={{
                  height: 50, // chiều cao (nếu muốn)
                  flex: 1,
                }}
              >
                <MyButton
                  title="GOOGLE"
                  onPress={() => console.log("Google pressed")}
                  icon={<AntDesign name="google" size={16} color="#DB4437" />}
                />
              </View>
            </View>
          </View>

          {/* Email Button */}
          <View
            style={{
              height: 50,
              borderWidth: 2,
              borderRadius: 50,
              borderColor: "rgb(136, 136, 136)",
              // nền tối trong suốt nhẹ, tránh ám tím
              backgroundColor: "rgba(0, 0, 0, 0.35)",
            }}
          >
            <Pressable
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                Start with your email
              </Text>
            </Pressable>
          </View>

          {/* Sign In Link */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 14 }}>
              Already have an account?{" "}
              <Link href="/(auth)/login">
                <Text style={{ color: "#4da6ff", fontWeight: "bold" }}>
                  Sign In
                </Text>
              </Link>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
