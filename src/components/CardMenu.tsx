import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/component_common/card.menu.styles'

interface CardMenuProps {
  title?: string
  price?: string
  rating?: number
  description?: string
  image?: string
  onPress?: () => void
}

export default function CardMenu({
  title = "Double Cheeseburger",
  price = "$12.99",
  rating = 4.8,
  description = "Juicy double patty with fresh lettuce, cheese, and special sauce",
  image = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300",
  onPress
}: CardMenuProps) {
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Food Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: image }}
          style={styles.foodImage}
          resizeMode="cover"
        />
        {/* Rating Badge */}
        <View style={styles.ratingBadge}>
          <AntDesign name="star" size={12} color="#FFD700" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>

        {/* Action Buttons */}
        {/* <View style={styles.actions}>
          <TouchableOpacity style={styles.favoriteButton}>
            <AntDesign name="hearto" size={18} color="#F97316" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.addButton}>
            <AntDesign name="plus" size={18} color="white" />
          </TouchableOpacity>
        </View> */}
      </View>
    </TouchableOpacity>
  )
}

// styles moved to src/styles/component_common/card.menu.styles.ts