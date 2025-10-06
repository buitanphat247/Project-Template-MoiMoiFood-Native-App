import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  image: { width: "100%", height: 170 },
  priceBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  priceText: { fontSize: 16, fontWeight: "800", color: "#111827" },
  favBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  info: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 14 },
  name: { fontSize: 18, fontWeight: "800", color: "#111827" },
  desc: { marginTop: 6, color: "#6B7280" },
});

export default styles;


