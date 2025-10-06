import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  ratingOverlay: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  ratingNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 2,
  },
  starIcon: {
    marginRight: 2,
  },
  reviewCount: {
    fontSize: 10,
    color: '#666',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default RestaurantImage;
