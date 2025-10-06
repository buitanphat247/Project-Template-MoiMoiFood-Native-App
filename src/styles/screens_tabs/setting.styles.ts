import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#111827', paddingHorizontal: 16, paddingBottom: 16 },
  profileCard: { borderWidth: 1, marginHorizontal: 12, marginBottom: 12, padding: 12, borderRadius: 12, backgroundColor: '#f9fafb', flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 56, height: 56, borderRadius: 28, marginRight: 12 },
  name: { fontSize: 16, fontWeight: '600', color: '#111827' },
  email: { color: '#6b7280', marginTop: 2 },
  editBtn: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#e5e7eb' },
  editText: { color: '#111827', fontWeight: '600' },
  sections: { paddingHorizontal: 16, display: 'flex', flexDirection: 'column', gap: 20, paddingBottom: 20 },
  sectionTitle: { color: '#6b7280', fontSize: 13, fontWeight: '600', textTransform: 'uppercase' },
  sectionBlock: { backgroundColor: '#ffffff' },
});

export default styles;


