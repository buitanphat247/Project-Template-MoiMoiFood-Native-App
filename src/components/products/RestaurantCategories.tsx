import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/component_products/restaurant.categories.styles';

interface RestaurantCategoriesProps {
  categories: string[];
}

const RestaurantCategories: React.FC<RestaurantCategoriesProps> = ({
  categories,
}) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>{category.toUpperCase()}</Text>
        </View>
      ))}
    </View>
  );
};

export default RestaurantCategories;
