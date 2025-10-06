import EmailCTA from "@/components/welcome/EmailCTA";
import SocialLoginButtons from "@/components/welcome/SocialLoginButtons";
import WelcomeHeader from "@/components/welcome/WelcomeHeader";
import styles from "@/styles/screens_root/index.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import {
  ImageBackground,
  StatusBar,
  Text,
  View
} from "react-native";

export default function WelcomePage() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/background-welcome.jpg")}
        style={styles.bgImage}
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
        <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 0 }}>
          <WelcomeHeader />
          <SocialLoginButtons />

          {/* Email Button */}
          <EmailCTA onPress={() => {}} />

          {/* Sign In Link */}
          <View style={styles.signinRow}>
            <Text style={styles.signinText}>
              Already have an account?{" "}
              <Link href="/(auth)/login">
                <Text style={styles.signinLink}>Sign In</Text>
              </Link>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
