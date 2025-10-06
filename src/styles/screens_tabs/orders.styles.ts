import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 },
  headerBack: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  headerTitleWrap: { flex: 1, alignItems: 'center', marginRight: 32 },
  headerTitle: { fontSize: 16, fontWeight: '700', color: '#111827' },

  listContent: { paddingHorizontal: 16, paddingBottom: 24 },
  itemRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  thumb: { width: 56, height: 56, borderRadius: 10, backgroundColor: '#F3F4F6' },
  itemMain: { flex: 1, marginLeft: 12 },
  itemName: { fontSize: 14, fontWeight: '700', color: '#111827' },
  itemDesc: { fontSize: 12, color: '#9CA3AF' },
  itemPrice: { fontSize: 14, fontWeight: '700', color: '#EF4444', marginTop: 6 },

  qtyWrap: { alignItems: 'center', gap: 6 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  qtyBtn: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#F97316', alignItems: 'center', justifyContent: 'center' },
  qtyText: { width: 24, textAlign: 'center', color: '#111827', fontWeight: '700' },
  removeBtn: { marginTop: 8, alignSelf: 'center' },

  divider: { height: 1, backgroundColor: '#E5E7EB' },

  promoWrap: { flexDirection: 'row', alignItems: 'center', gap: 12, marginHorizontal: 16, marginTop: 12, padding: 12, borderRadius: 14, backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB' },
  promoInput: { flex: 1, height: 40, paddingHorizontal: 12, borderRadius: 12, backgroundColor: '#FFFFFF' },
  promoBtn: { height: 40, paddingHorizontal: 18, backgroundColor: '#F97316', borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  promoBtnText: { color: '#FFFFFF', fontWeight: '700' },

  summaryWrap: { marginTop: 12, marginHorizontal: 16, borderTopWidth: 1, borderTopColor: '#E5E7EB' },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  summaryLabel: { color: '#6B7280' },
  summaryValue: { color: '#111827', fontWeight: '700' },
  currency: { color: '#9CA3AF', fontSize: 12, marginLeft: 4 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14 },
  totalLeft: { color: '#6B7280' },
  totalRight: { color: '#111827', fontWeight: '800' },

  footer: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 24 },
  checkoutBtn: { height: 52, borderRadius: 26, backgroundColor: '#F97316', alignItems: 'center', justifyContent: 'center' },
  checkoutText: { color: '#FFFFFF', fontWeight: '800', letterSpacing: 1 },
});

export default styles;


