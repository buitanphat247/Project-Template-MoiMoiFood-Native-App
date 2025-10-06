import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 3,
  },
  center: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  addressRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  addressHint: { fontSize: 12, color: "#6B7280", fontWeight: "500" },
  addressText: { fontSize: 14, color: "#F97316", fontWeight: "600", marginTop: 2 },
  avatarBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FEF3C7",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;


