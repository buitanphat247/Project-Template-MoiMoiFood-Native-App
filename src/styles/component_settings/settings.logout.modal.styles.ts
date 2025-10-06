import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.45)", padding: 24, justifyContent: "center" },
  card: { backgroundColor: "#ffffff", borderRadius: 16, overflow: "hidden" },
  header: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 4 },
  title: { fontSize: 18, fontWeight: "700", color: "#111827" },
  desc: { marginTop: 8, color: "#4b5563" },
  divider: { height: 1, backgroundColor: "#E5E7EB", marginTop: 12 },
  row: { flexDirection: "row" },
  btn: { flex: 1, paddingVertical: 14, alignItems: "center" },
  cancelText: { fontWeight: "700", color: "#111827" },
  confirmText: { fontWeight: "700", color: "#DC2626" },
  vDivider: { width: 1, backgroundColor: "#E5E7EB" },
});

export default styles;


