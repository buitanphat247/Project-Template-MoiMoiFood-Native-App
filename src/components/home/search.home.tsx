import { useState } from "react";
import { View } from "react-native";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import { FontAwesome } from "@expo/vector-icons";

const SectionFindFood = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View>
      {/* Ô tìm kiếm và nút filter */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* Ô tìm kiếm dùng MyInput */}
        <View style={{ flex: 1 }}>
          <MyInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Find for food or restaurant..."
          />
        </View>

        {/* Nút filter */}
        <MyButton
          onPress={() => console.log("Filter pressed")}
          icon={<FontAwesome name="filter" size={24} color="black" />}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#ffffff",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
          }}
        />
      </View>
    </View>
  );
};
export default SectionFindFood;
