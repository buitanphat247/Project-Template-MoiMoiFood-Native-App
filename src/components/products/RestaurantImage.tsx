import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/component_products/restaurant.image.styles';

interface RestaurantImageProps {
  imageUrl: string;
  rating: number;
  reviewCount: number;
  isFavorite?: boolean;
  onFavoritePress?: () => void;
}

const RestaurantImage: React.FC<RestaurantImageProps> = ({
  imageUrl,
  rating,
  reviewCount,
  isFavorite = false,
  onFavoritePress,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      
      {/* Rating Overlay */}
      <View style={styles.ratingOverlay}>
        <Text style={styles.ratingNumber}>{rating}</Text>
        <FontAwesome5 name="star" size={12} color="#FFD700" style={styles.starIcon} />
        <Text style={styles.reviewCount}>({reviewCount}+)</Text>
      </View>

      {/* Favorite Button */}
      <TouchableOpacity 
        style={styles.favoriteButton} 
        onPress={onFavoritePress}
        activeOpacity={0.7}
      >
        <FontAwesome5 
          name={isFavorite ? "heart" : "heart"} 
          size={14} 
          color={isFavorite ? "#FF6B35" : "#fff"} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantImage;
