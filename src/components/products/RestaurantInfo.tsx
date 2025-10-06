import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface RestaurantInfoProps {
  name: string;
  isVerified?: boolean;
  deliveryInfo: {
    isFreeDelivery: boolean;
    deliveryTime: string;
  };
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  name,
  isVerified = false,
  deliveryInfo,
}) => {
  return (
    <View style={styles.container}>
      {/* Restaurant Name with Verified Badge */}
      <View style={styles.nameContainer}>
        <Text style={styles.restaurantName}>{name}</Text>
        {isVerified && (
          <View style={styles.verifiedBadge}>
            <FontAwesome5 name="check" size={10} color="#fff" />
          </View>
        )}
      </View>

      {/* Delivery Information */}
      <View style={styles.deliveryContainer}>
        {deliveryInfo.isFreeDelivery && (
          <View style={styles.deliveryItem}>
            <FontAwesome5 name="truck" size={12} color="#FF6B35" />
            <Text style={styles.deliveryText}>Free delivery</Text>
          </View>
        )}
        
        <View style={styles.deliveryItem}>
          <FontAwesome5 name="clock" size={12} color="#FF6B35" />
          <Text style={styles.deliveryText}>{deliveryInfo.deliveryTime}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 12,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  verifiedBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  deliveryText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
    fontWeight: '500',
  },
});

export default RestaurantInfo;
