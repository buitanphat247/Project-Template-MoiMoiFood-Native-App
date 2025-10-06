import { Link } from "expo-router";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import styles from "../../styles/component_homes/category.section.home.styles";

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
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Link href={`/overview.product`} style={styles.link}>
          View All
        </Link>
      </View>
    </View>
  );
};

export default CategorySectionHome;
