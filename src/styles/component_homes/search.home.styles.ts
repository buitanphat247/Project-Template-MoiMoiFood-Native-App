import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  inputWrapper: { flex: 1 },
  filterBtn: {
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
  },
});

export default styles;


