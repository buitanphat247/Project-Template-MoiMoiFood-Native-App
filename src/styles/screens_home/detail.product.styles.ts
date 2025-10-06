import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  imageWrap: { paddingHorizontal: 16, paddingTop: 8 },
  imageBox: { position: 'relative' },
  hero: { width: '100%', height: 190, borderRadius: 16 },
  backBtn: { position: 'absolute', top: 10, left: 10, width: 32, height: 32, borderRadius: 16, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  heartBtn: { position: 'absolute', top: 10, right: 10, width: 32, height: 32, borderRadius: 16, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  content: { paddingHorizontal: 16, marginTop: 12 },
  title: { fontSize: 22, fontWeight: '900', color: '#111827' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 8 },
  priceRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 },
  price: { fontSize: 28, fontWeight: '900', color: '#EF4444' },
  qtyRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  qtyBtnMinus: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: '#D1D5DB', alignItems: 'center', justifyContent: 'center' },
  qtyBtnPlus: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#F97316', alignItems: 'center', justifyContent: 'center' },
  desc: { color: '#6B7280', marginTop: 10, lineHeight: 20 },
  addOnWrap: { paddingHorizontal: 16, marginTop: 16 },
  addOnTitle: { fontWeight: '800', color: '#111827' },
  addOnItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12 },
  addOnLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  addOnImg: { width: 28, height: 28, borderRadius: 6 },
  addOnName: { color: '#111827' },
  addOnPrice: { color: '#374151' },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#F97316' },
  ctaWrap: { paddingHorizontal: 16, marginTop: 20, marginBottom: 10 },
  ctaBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: '#F97316', height: 48, borderRadius: 999 },
  ctaText: { color: '#FFFFFF', fontWeight: '800' },
});

export default styles;


