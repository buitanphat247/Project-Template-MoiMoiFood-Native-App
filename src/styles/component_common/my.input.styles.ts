import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: { width: "100%" },
  container: {
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  disabled: { opacity: 0.6 },
  focused: { borderColor: "#F97316", shadowColor: "#F97316" },
  input: { flex: 1, color: "#111827", fontSize: 16 },
  error: { marginTop: 6, color: "#ef4444", fontSize: 12 },
  eyeText: { color: "#6B7280", fontSize: 12 },
});

export default styles;


