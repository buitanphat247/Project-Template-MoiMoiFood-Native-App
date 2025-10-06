import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import styles from "../../styles/component_homes/search.home.styles";
import MyButton from "../MyButton";
import MyInput from "../MyInput";

const SectionFindFood = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.inputWrapper}>
          <MyInput value={searchText} onChangeText={setSearchText} placeholder="Find for food or restaurant..." />
        </View>
        <MyButton onPress={() => console.log("Filter pressed")} icon={<FontAwesome name="filter" size={24} color="black" />} style={styles.filterBtn} />
      </View>
    </View>
  );
};
export default SectionFindFood;
