import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: { flex: 1 },
  bgImage: { flex: 1, justifyContent: "center", paddingHorizontal: 24 },
  heroTextWrap: { marginBottom: 48 },
  heroWelcome: { fontSize: 36, fontWeight: "bold", color: "#374151", marginBottom: 8 },
  heroBrand: { fontSize: 48, fontWeight: "bold", color: "#F97316", marginBottom: 16 },
  heroSubtitle: { fontSize: 18, color: "#ffffff", lineHeight: 24 },
  socialWrap: { marginBottom: 32 },
  socialDividerRow: { flexDirection: "row", alignItems: "center", marginVertical: 20 },
  dividerLine: { flex: 1, height: 1, backgroundColor: "white" },
  dividerText: { marginHorizontal: 10, color: "white", fontSize: 16, fontWeight: "500" },
  socialButtonsRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 20 },
  socialBtnBox: { height: 50, flex: 1 },
  emailBtnBox: { height: 50, borderWidth: 2, borderRadius: 50, borderColor: "rgb(136, 136, 136)", backgroundColor: "rgba(0, 0, 0, 0.35)" },
  emailPressable: { height: "100%", justifyContent: "center", alignItems: "center" },
  emailText: { color: "white", textAlign: "center", fontWeight: "600", fontSize: 18 },
  signinRow: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  signinText: { color: "#fff", fontSize: 14 },
  signinLink: { color: "#4da6ff", fontWeight: "bold" },
});

export default styles;


