import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10 },
  left: { flexDirection: "row", alignItems: "center" },
  leading: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  title: { fontSize: 16, color: "#111827" },
});

export default styles;


