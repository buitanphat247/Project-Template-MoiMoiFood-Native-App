import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface RestaurantCategoriesProps {
  categories: string[];
}

const RestaurantCategories: React.FC<RestaurantCategoriesProps> = ({
  categories,
}) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryTag}>
          <Text style={styles.categoryText}>{category.toUpperCase()}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },
  categoryTag: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#666',
    letterSpacing: 0.5,
  },
});

export default RestaurantCategories;
