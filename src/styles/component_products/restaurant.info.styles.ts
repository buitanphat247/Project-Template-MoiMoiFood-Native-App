import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 12 },
  nameContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  restaurantName: { fontSize: 18, fontWeight: 'bold', color: '#333', marginRight: 8 },
  verifiedBadge: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center' },
  deliveryContainer: { flexDirection: 'row', alignItems: 'center' },
  deliveryItem: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  deliveryText: { fontSize: 12, color: '#666', marginLeft: 4, fontWeight: '500' },
});

export default styles;


