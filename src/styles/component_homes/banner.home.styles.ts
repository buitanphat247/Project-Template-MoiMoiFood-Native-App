import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {},
  slide: {
    flex: 1,
    overflow: "hidden",
  },
  image: {
    width,
    height: width / 3,
    resizeMode: "cover",
  },
});

export default styles;


