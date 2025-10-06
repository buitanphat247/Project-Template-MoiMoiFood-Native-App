import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFFFFF" },
  topBar: { paddingHorizontal: 16, paddingVertical: 12, borderBottomColor: "#E5E7EB", borderBottomWidth: 1 },
  topRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { fontSize: 20, fontWeight: "700", color: "#111827" },
  markAll: { color: "#3B82F6", fontWeight: "600" },
  filters: { flexDirection: "row", gap: 8, marginTop: 12 },
  filterChip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  item: { paddingVertical: 12, paddingHorizontal: 16, borderBottomColor: "#E5E7EB", borderBottomWidth: 1, gap: 10 },
  iconWrap: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#F1F5F9", alignItems: "center", justifyContent: "center" },
  itemRow: { flexDirection: "row", alignItems: "flex-start", gap: 12 },
  itemTitle: { fontSize: 15, color: "#111827", flexShrink: 1 },
  itemMsg: { fontSize: 13, color: "#4B5563" },
  itemTime: { fontSize: 12, color: "#9CA3AF" },
  empty: { alignItems: "center", justifyContent: "center", padding: 32, gap: 8 },
});

export default styles;


