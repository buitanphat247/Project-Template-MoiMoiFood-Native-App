import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#F3F4F6", alignItems: "center", justifyContent: "center" },
  inputWrap: { flex: 1, flexDirection: "row", alignItems: "center", backgroundColor: "#F3F4F6", borderRadius: 12, paddingHorizontal: 12, height: 44 },
  input: { marginLeft: 8, flex: 1, color: "#111827" },
  filterBtn: { width: 44, height: 44, borderRadius: 12, backgroundColor: "#111827", alignItems: "center", justifyContent: "center" },
});

export default styles;


