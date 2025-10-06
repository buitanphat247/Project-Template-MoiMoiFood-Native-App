import { StyleProp, Text, View, ViewStyle } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";

interface CategorySectionHomeProps {
  title: string;
  data: any[];
  style?: StyleProp<ViewStyle>;
}
const CategorySectionHome = ({
  title,
  data,
  style,
}: CategorySectionHomeProps) => {
  return (
    <View style={[{}, style]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#2c2c2c",
            fontStyle: "italic",
          }}
        >
          {title}
        </Text>
        <Link
          href={`/overview.product`}
          style={{
            color: "#ff6b35",
            fontSize: 14,
            fontWeight: "semibold",
            textDecorationLine: "underline",
          }}
        >
          View All
        </Link>
      </View>
    </View>
  );
};

export default CategorySectionHome;
