import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  scrollContent: {
    gap: 12,
  },
  scroll: {
    flexGrow: 0,
  },
  item: {
    alignItems: "center",
    width: 80,
    paddingVertical: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  name: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
    fontWeight: "500",
    lineHeight: 16,
  },
});

export default styles;


