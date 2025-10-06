import BannerHome from "@/components/home/banner.home";
import CategoryHome from "@/components/home/category.home";
import CategoryPartHome from "@/components/home/category.part.home";
import HeaderHome from "@/components/home/header.home";
import SectionFindFood from "@/components/home/search.home";
import React from "react";
import { ScrollView, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* Sticky Header */}
      <HeaderHome />
      {/* Nội dung scrollable */}
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <BannerHome />
        <View
          style={{
            paddingHorizontal: 16,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 10,
          }}
        >
          <SectionFindFood />
          <CategoryHome />
          <CategoryPartHome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
