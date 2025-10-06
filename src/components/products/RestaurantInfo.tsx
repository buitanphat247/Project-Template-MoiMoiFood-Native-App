import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/component_products/restaurant.info.styles';

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

export default RestaurantInfo;
