import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: { backgroundColor: "#ffffff", borderRadius: 18, overflow: "hidden", marginBottom: 14, shadowColor: "#000", shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 2 },
  imageWrap: { position: "relative" },
  image: { width: "100%", height: 190 },
  price: { position: "absolute", top: 10, left: 10, backgroundColor: "#FFFFFF", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  priceText: { fontWeight: "800", color: "#111827" },
  favBtn: { position: "absolute", top: 10, right: 10, width: 36, height: 36, borderRadius: 18, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center" },
  ratingRowWrap: { position: "absolute", bottom: 12, left: 0, right: 0, alignItems: "center" },
  ratingRow: { backgroundColor: "#fff", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6, flexDirection: "row", alignItems: "center", gap: 6, borderWidth: 1, borderColor: "#F59E0B" },
  nameWrap: { paddingHorizontal: 14, paddingTop: 16, paddingBottom: 14 },
  name: { fontSize: 16, fontWeight: "800", color: "#111827" },
  desc: { marginTop: 6, color: "#6B7280" },
});

export default styles;


