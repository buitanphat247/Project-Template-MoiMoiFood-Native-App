import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: { position: 'relative', height: 180 },
  foodImage: { width: '100%', height: '100%' },
  ratingBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  ratingText: { fontSize: 12, fontWeight: '600', color: '#374151' },
  content: { padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: { fontSize: 18, fontWeight: '700', color: '#1F2937', flex: 1, marginRight: 8 },
  price: { fontSize: 20, fontWeight: '800', color: '#F97316' },
  description: { fontSize: 14, color: '#6B7280', lineHeight: 20, marginBottom: 16 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  favoriteButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FEF3C7', alignItems: 'center', justifyContent: 'center' },
  addButton: { backgroundColor: '#F97316', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 25, flexDirection: 'row', alignItems: 'center', gap: 8 },
});

export default styles;


