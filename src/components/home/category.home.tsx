import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const data1 = [
  {
    key: 1,
    name: "Hot Deal",
    source: require("@assets/icons/flash-deals.png"),
  },
  {
    key: 2,
    name: "Quán Ngon",
    source: require("@assets/icons/nice-shop.png"),
  },
  { key: 3, name: "Tích Điểm", source: require("@assets/icons/points.png") },
  { key: 4, name: "Ngọt Xỉu", source: require("@assets/icons/rice.png") },
  {
    key: 5,
    name: "Quán Tiền Bối",
    source: require("@assets/icons/noodles.png"),
  },
  {
    key: 6,
    name: "Bún, Mì, Phở",
    source: require("@assets/icons/bun-pho.png"),
  },
  { key: 7, name: "BBQ", source: require("@assets/icons/bbq.png") },
  { key: 8, name: "Fast Food", source: require("@assets/icons/fastfood.png") },
  { key: 9, name: "Pizza", source: require("@assets/icons/Pizza.png") },
  { key: 10, name: "Burger", source: require("@assets/icons/burger.png") },
  {
    key: 11,
    name: "Sống Khỏe",
    source: require("@assets/icons/egg-cucmber.png"),
  },
  { key: 12, name: "Giảm 50k", source: require("@assets/icons/moi-moi.png") },
  {
    key: 13,
    name: "99k Off",
    source: require("@assets/icons/fried-chicken.png"),
  },
  {
    key: 14,
    name: "No Bụng",
    source: require("@assets/icons/korean-food.png"),
  },
  { key: 15, name: "Freeship", source: require("@assets/icons/Steak.png") },
  { key: 16, name: "Deal 0Đ", source: require("@assets/icons/tomato.png") },
  { key: 17, name: "Món 1Đ", source: require("@assets/icons/elipse.png") },
  { key: 18, name: "Ăn chiều", source: require("@assets/icons/chowmein.png") },
  { key: 19, name: "Combo 199k", source: require("@assets/icons/Notif.png") },
  { key: 20, name: "Milk Tea", source: require("@assets/icons/salad.png") },
];

const CategoryHome = () => {
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = 80; // Chiều rộng mỗi item

  return (
    <View >
     
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 12,
        }}
        style={{ flexGrow: 0 }}
      >
        {data1.map((item, index) => (
          <TouchableOpacity
            key={item.key}
            style={{
              alignItems: 'center',
              width: itemWidth,
              paddingVertical: 8,
            }}
            activeOpacity={0.7}
          >
            <View style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#f8f9fa',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 8,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.1,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <Image 
                source={item.source} 
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'contain'
                }}
              />
            </View>
            <Text style={{
              fontSize: 12,
              textAlign: 'center',
              color: '#666',
              fontWeight: '500',
              lineHeight: 16,
            }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryHome;
